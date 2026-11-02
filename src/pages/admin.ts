export const adminPage = `<main class="admin-page">
    <div id="admin-heading" class="hidden">
        <header class="admin-header">
            <div>
                <h1>プロダクト管理</h1>
                <p>Firebaseにプロダクト情報を保存します。</p>
                <p id="admin-user"></p>
            </div>
            <a href="product.html" class="admin-preview-link" target="_blank" rel="noopener noreferrer">プロダクトページを確認</a>
        </header>
    </div>
    <section id="admin-login" class="admin-notice">
        <h2>管理者ログイン</h2>
        <button type="button" id="admin-google-login">Googleでログイン</button>
    </section>
    <p id="admin-status" class="admin-status" aria-live="polite">ログイン状態を確認しています...</p>
    <section id="admin-editor" class="hidden">
        <div class="admin-toolbar" aria-label="プロダクト管理操作">
            <button type="button" id="admin-add">プロダクトを追加</button>
            <button type="button" id="admin-logout">ログアウト</button>
        </div>
        <div id="admin-product-list" class="admin-product-list"></div>
    </section>
</main>`;
