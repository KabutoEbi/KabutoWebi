import { renderFooter } from "./footer.js";
import { renderHeader, type NavigationPage } from "./header.js";

export function renderPublicPage(content: string, activePage: NavigationPage | null): string {
    return `${renderHeader(activePage)}
    <div class="main-content">
${content}
        ${renderFooter()}
    </div>`;
}
