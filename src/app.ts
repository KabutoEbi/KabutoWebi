import { initializeAdmin } from "./admin.js";
import { applyTailwindDesign } from "./design.js";
import { initialize404Interaction } from "./interactions.js";
import { pageTemplates, type PageName } from "./pages.js";
import { loadProducts } from "./product.js";

declare global {
    interface Window {
        dataLayer: unknown[][];
        gtag: (...args: unknown[]) => void;
    }
}

function initializeAnalytics(): void {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
        window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", "G-ET4L3ZCTPR");

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-ET4L3ZCTPR";
    document.head.appendChild(script);
}

function getPageName(): PageName {
    const page = document.body.dataset.page;
    return page && page in pageTemplates ? page as PageName : "notFound";
}

function decorateShell(page: PageName): void {
    const navigation = document.querySelector<HTMLElement>(".sidebar");
    if (navigation) {
        const brand = document.createElement("a");
        brand.href = "/";
        brand.className = "site-brand";
        const icon = document.createElement("span");
        icon.className = "brand-icon";
        icon.textContent = "K";
        const name = document.createElement("span");
        name.textContent = "KabutoWebi";
        brand.append(icon, name);
        navigation.prepend(brand);

        const activePath = page === "home" ? "/" : page === "veryfunny" || page === "stackstones" ? "/product.html" : `/${page}.html`;
        navigation.querySelectorAll<HTMLAnchorElement>("li a").forEach((link) => {
            if (link.getAttribute("href") === activePath) link.setAttribute("aria-current", "page");
        });
    }

    const footer = document.querySelector<HTMLElement>(".footer");
    if (footer) {
        const adminLink = document.createElement("a");
        adminLink.href = "/admin.html";
        adminLink.className = "admin-footer-link";
        adminLink.textContent = "管理者ページ";
        footer.appendChild(adminLink);
    }
}

async function initializePage(page: PageName): Promise<void> {
    document.body.innerHTML = pageTemplates[page];
    decorateShell(page);
    applyTailwindDesign();
    initializeAnalytics();

    if (page === "product" || page === "admin") {
        try {
            if (page === "product") await loadProducts();
            if (page === "admin") initializeAdmin();
        } catch (error: unknown) {
            console.error("Firebase initialization failed:", error);
            const container = document.getElementById("product-container");
            if (page === "product" && container) {
                container.innerHTML = '<p class="product-load-error">作品一覧を読み込めませんでした。時間をおいて再読み込みしてください。</p>';
                applyTailwindDesign(container);
            }
            if (page === "admin") {
                const status = document.getElementById("admin-status");
                if (status) {
                    status.textContent = error instanceof Error ? error.message : "Firebaseを初期化できませんでした。";
                    status.classList.add("text-red-700");
                }
            }
        }
    }

    if (page === "notFound") {
        initialize404Interaction();
    }
}

void initializePage(getPageName());
