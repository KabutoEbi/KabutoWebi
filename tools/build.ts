import {
    cpSync,
    mkdirSync,
    rmSync,
    writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { build } from "esbuild";

interface PageDefinition {
    fileName: string;
    pageName: string;
    title: string;
    description: string;
    robots?: string;
}

const projectRoot = process.cwd();
const outputDirectory = join(projectRoot, "dist");

const pages: PageDefinition[] = [
    {
        fileName: "index.html",
        pageName: "home",
        title: "KabutoWebi",
        description: "KabutoEbiのポートフォリオサイトです。いろいろ掲載しています。",
    },
    {
        fileName: "product.html",
        pageName: "product",
        title: "Product - KabutoWebi",
        description: "KabutoEbiの作品一覧。アプリ、ゲームなど様々な作品を紹介しています。",
    },
    {
        fileName: "clothes.html",
        pageName: "clothes",
        title: "Clothes - KabutoWebi",
        description: "KabutoEbiのオリジナルグッズ。SUZURIで販売中のTシャツやパーカーなどを紹介しています。",
    },
    {
        fileName: "about.html",
        pageName: "about",
        title: "About - KabutoWebi",
        description: "KabutoEbiのプロフィール。趣味や技術スタック、活動情報を掲載しています。",
    },
    {
        fileName: "veryfunny.html",
        pageName: "veryfunny",
        title: "veryfunny - KabutoWebi",
        description: "KabutoEbiのveryfunny作品集。とてもおもしろい。",
    },
    {
        fileName: "stackstones.html",
        pageName: "stackstones",
        title: "賽の河原の石積み - KabutoWebi",
        description: "KabutoEbiの自作ゲーム【賽の河原の石積み】です。",
    },
    {
        fileName: "404.html",
        pageName: "notFound",
        title: "404 | KabutoWebi",
        description: "お探しのページが見つかりませんでした。KabutoEbiのポートフォリオサイトです。",
    },
    {
        fileName: "admin.html",
        pageName: "admin",
        title: "プロダクト管理 - KabutoWebi",
        description: "KabutoWebiのプロダクト管理ページです。",
        robots: "noindex, nofollow",
    },
];

function escapeAttribute(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function createHtml(page: PageDefinition): string {
    const escapedTitle = escapeAttribute(page.title);
    const escapedDescription = escapeAttribute(page.description);
    const socialMetadata = page.pageName === "admin" ? "" : `
    <meta property="og:title" content="${escapedTitle}">
    <meta property="og:description" content="${escapedDescription}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="/images/ogp.png">
    <meta property="og:site_name" content="KabutoWebi">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapedTitle}">
    <meta name="twitter:description" content="${escapedDescription}">
    <meta name="twitter:image" content="/images/ogp.png">`;
    const robots = page.robots
        ? `\n    <meta name="robots" content="${page.robots}">`
        : "";

    return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">${robots}
    <meta name="description" content="${escapedDescription}">${socialMetadata}
    <title>${escapedTitle}</title>
    <link rel="icon" type="image/png" href="/images/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
    <link rel="shortcut icon" href="/images/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
    <link rel="manifest" href="/images/site.webmanifest">
    <link rel="stylesheet" href="/tailwind.css">
    <script type="module" src="js/app.js"></script>
</head>
<body data-page="${page.pageName}">
    <noscript>このサイトを表示するにはJavaScriptを有効にしてください。</noscript>
</body>
</html>
`;
}

const unityHtml = `<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Unity WebGL Player | StackStones</title>
    <link rel="shortcut icon" href="TemplateData/favicon.ico">
    <link rel="stylesheet" href="../tailwind.css">
</head>
<body class="m-0 min-h-screen overflow-hidden bg-[#231f20]">
    <div id="unity-container" class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <canvas id="unity-canvas" class="block bg-[#231f20]" width="960" height="600" tabindex="-1"></canvas>
        <div id="unity-loading-bar" class="absolute left-1/2 top-1/2 hidden w-[300px] -translate-x-1/2 -translate-y-1/2 text-center">
            <img src="TemplateData/unity-logo-dark.png" alt="Unity" class="mx-auto mb-5 h-auto w-[154px]">
            <div class="mx-auto h-[18px] w-[141px] overflow-hidden rounded border border-white bg-[#333]">
                <div id="unity-progress-bar-full" class="h-full w-0 bg-white transition-[width] duration-100"></div>
            </div>
        </div>
        <div id="unity-warning" class="absolute left-1/2 top-[5%] hidden w-full -translate-x-1/2 text-center"></div>
    </div>
    <script>
        const container = document.querySelector("#unity-container");
        const canvas = document.querySelector("#unity-canvas");
        const loadingBar = document.querySelector("#unity-loading-bar");
        const progressBarFull = document.querySelector("#unity-progress-bar-full");
        const warningBanner = document.querySelector("#unity-warning");

        function unityShowBanner(message, type) {
            const banner = document.createElement("div");
            banner.textContent = message;
            banner.className = type === "error"
                ? "bg-red-600 p-2.5 text-white"
                : "bg-yellow-300 p-2.5 text-black";
            warningBanner.appendChild(banner);
            warningBanner.classList.remove("hidden");
            if (type !== "error") {
                setTimeout(() => {
                    banner.remove();
                    warningBanner.classList.toggle("hidden", warningBanner.children.length === 0);
                }, 5000);
            }
        }

        const buildUrl = "Build";
        const config = {
            dataUrl: buildUrl + "/stackstones.data",
            frameworkUrl: buildUrl + "/stackstones.framework.js",
            codeUrl: buildUrl + "/stackstones.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "KabutoEbi",
            productName: "StackStones",
            productVersion: "1.1",
            showBanner: unityShowBanner,
        };

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            const meta = document.createElement("meta");
            meta.name = "viewport";
            meta.content = "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
            document.head.appendChild(meta);
            container.className = "fixed inset-0";
            canvas.className = "h-full w-full bg-[#231f20]";
        } else {
            canvas.classList.add("h-[600px]", "w-[960px]");
        }

        loadingBar.classList.remove("hidden");
        const loader = document.createElement("script");
        loader.src = buildUrl + "/stackstones.loader.js";
        loader.onload = () => {
            createUnityInstance(canvas, config, (progress) => {
                progressBarFull.style.width = 100 * progress + "%";
            }).then(() => {
                loadingBar.classList.add("hidden");
            }).catch((message) => alert(message));
        };
        document.body.appendChild(loader);
    </script>
</body>
</html>
`;

const webManifest = {
    name: "KabutoWebi",
    short_name: "KabutoWebi",
    icons: [
        {
            src: "/images/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "/images/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
        },
    ],
    theme_color: "#059669",
    background_color: "#ffffff",
    display: "standalone",
};

rmSync(outputDirectory, { recursive: true, force: true });
mkdirSync(outputDirectory, { recursive: true });

for (const directory of ["images", "unity"]) {
    cpSync(join(projectRoot, directory), join(outputDirectory, directory), { recursive: true });
}

for (const page of pages) {
    writeFileSync(join(outputDirectory, page.fileName), createHtml(page));
}

writeFileSync(join(outputDirectory, "unity/index.html"), unityHtml);
writeFileSync(
    join(outputDirectory, "images/site.webmanifest"),
    JSON.stringify(webManifest, null, 2),
);
writeFileSync(
    join(projectRoot, ".build/tailwind-input.css"),
    '@import "tailwindcss";\n@source "../src";\n@source "../tools";\n',
);

await build({
    entryPoints: [join(projectRoot, "src/app.ts")],
    outfile: join(outputDirectory, "js/app.js"),
    bundle: true,
    format: "esm",
    platform: "browser",
    target: "es2020",
    minify: true,
});
