import { renderPublicPage } from "./components/layout.js";
import { aboutPage } from "./pages/about.js";
import { adminPage } from "./pages/admin.js";
import { clothesPage } from "./pages/clothes.js";
import { homePage } from "./pages/home.js";
import { notFoundPage } from "./pages/not-found.js";
import { productPage } from "./pages/product.js";
import { stackstonesPage } from "./pages/stackstones.js";
import { veryfunnyPage } from "./pages/veryfunny.js";

export const pageTemplates = {
    home: renderPublicPage(homePage, "home"),
    product: renderPublicPage(productPage, "product"),
    clothes: renderPublicPage(clothesPage, "clothes"),
    about: renderPublicPage(aboutPage, "about"),
    veryfunny: renderPublicPage(veryfunnyPage, "product"),
    stackstones: renderPublicPage(stackstonesPage, "product"),
    admin: adminPage,
    notFound: renderPublicPage(notFoundPage, null),
} as const;

export type PageName = keyof typeof pageTemplates;
