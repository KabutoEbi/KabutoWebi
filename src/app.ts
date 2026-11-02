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

async function initializePage(page: PageName): Promise<void> {
    document.body.innerHTML = pageTemplates[page];
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
