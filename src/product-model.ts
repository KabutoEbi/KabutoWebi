export interface ProductLink {
    label: string;
    url: string;
    newTab: boolean;
}

export interface Product {
    order: number;
    published: boolean;
    title: string;
    description: string;
    technology: string;
    links: ProductLink[];
}

export interface EditableProduct extends Product {
    id?: string;
}

export function compareProducts(a: EditableProduct, b: EditableProduct): number {
    return a.order - b.order || (a.id ?? "").localeCompare(b.id ?? "");
}

export function emptyProduct(order: number): EditableProduct {
    return {
        order,
        published: false,
        title: "",
        description: "",
        technology: "",
        links: [
            { label: "", url: "", newTab: true },
            { label: "", url: "", newTab: true },
        ],
    };
}

export function normalizeProduct(value: Record<string, unknown>, id?: string): EditableProduct {
    const links = Array.isArray(value.links) ? value.links : [];
    return {
        id,
        order: Number(value.order) || 0,
        published: value.published === true,
        title: String(value.title ?? ""),
        description: String(value.description ?? ""),
        technology: String(value.technology ?? ""),
        links: [0, 1].map((index) => {
            const link = links[index] as Partial<ProductLink> | undefined;
            return {
                label: String(link?.label ?? ""),
                url: String(link?.url ?? ""),
                newTab: link?.newTab === true,
            };
        }),
    };
}

export function validateProduct(product: Product): string | null {
    if (!product.title.trim()) return "プロダクト名を入力してください。";
    if (!Number.isFinite(product.order) || product.order < 0) return "表示順は0以上の数値にしてください。";
    for (const link of product.links) {
        if (!link.label && !link.url) continue;
        if (!link.label || !link.url) return "リンクには表示名とURLの両方を入力してください。";
        try {
            const url = new URL(link.url, document.baseURI);
            if (!(["http:", "https:"].includes(url.protocol) || link.url.startsWith("/"))) {
                return "リンクはhttp(s) URLかサイト内パスにしてください。";
            }
        } catch {
            return "リンクのURLが正しくありません。";
        }
    }
    return null;
}
