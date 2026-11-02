import { collection, onSnapshot, query, where } from "firebase/firestore";
import { applyTailwindDesign } from "./design.js";
import { getDatabase } from "./firebase.js";
import { compareProducts, normalizeProduct, type Product, type ProductLink } from "./product-model.js";

function safeLink(value: string): string | null {
    try {
        const url = new URL(value.trim(), document.baseURI);
        return ["http:", "https:"].includes(url.protocol) ? url.href : null;
    } catch {
        return null;
    }
}

function appendLink(item: HTMLDivElement, linkData: ProductLink): void {
    const href = safeLink(linkData.url);
    if (!linkData.label || !href) return;

    const link = document.createElement("a");
    link.className = "product-link";
    link.textContent = linkData.label;
    link.href = href;
    if (linkData.newTab) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }
    item.appendChild(link);
}

function createProductElement(product: Product): HTMLDivElement {
    const item = document.createElement("div");
    item.className = "product-item";

    const index = document.createElement("span");
    index.className = "product-index";
    index.textContent = `PROJECT / ${String(product.order).padStart(2, "0")}`;
    item.appendChild(index);

    const title = document.createElement("h3");
    title.textContent = product.title;
    item.appendChild(title);

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;
    item.appendChild(description);

    const technology = document.createElement("p");
    technology.className = "skill-description";
    technology.textContent = `使用技術: ${product.technology}`;
    item.appendChild(technology);

    const actions = document.createElement("div");
    actions.className = "product-actions";
    product.links.forEach((link) => appendLink(actions, link));
    item.appendChild(actions);
    return item;
}

export function watchProducts(): void {
    const container = document.getElementById("product-container");
    if (!container) return;

    const published = query(collection(getDatabase(), "products"), where("published", "==", true));
    onSnapshot(published, (snapshot) => {
        const products = snapshot.docs
            .map((document) => normalizeProduct(document.data(), document.id))
            .filter((product) => product.title)
            .sort(compareProducts);

        container.replaceChildren(...products.map(createProductElement));
        if (products.length === 0) {
            const message = document.createElement("p");
            message.className = "product-load-message";
            message.textContent = "公開中の作品はありません。";
            container.appendChild(message);
        }
        applyTailwindDesign(container);
    }, (error) => {
        console.error("Product loading failed:", error);
        const message = document.createElement("p");
        message.className = "product-load-error";
        message.textContent = "作品一覧を読み込めませんでした。時間をおいて再読み込みしてください。";
        container.replaceChildren(message);
        applyTailwindDesign(container);
    });
}
