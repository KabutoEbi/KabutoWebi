export type NavigationPage = "home" | "product" | "clothes" | "about";

const links: readonly { page: NavigationPage; label: string; href: string }[] = [
    { page: "home", label: "Home", href: "/" },
    { page: "product", label: "Product", href: "/product.html" },
    { page: "clothes", label: "Clothes", href: "/clothes.html" },
    { page: "about", label: "About", href: "/about.html" },
];

export function renderHeader(activePage: NavigationPage | null): string {
    const navigation = links.map(({ page, label, href }) =>
        `<li><a href="${href}"${activePage === page ? ' aria-current="page"' : ""}>${label}</a></li>`,
    ).join("\n            ");

    return `<nav class="sidebar" aria-label="メインナビゲーション">
        <a class="site-brand" href="/">
            <span class="brand-icon">K</span>
            <span>KabutoWebi</span>
        </a>
        <ul>
            ${navigation}
        </ul>
    </nav>`;
}
