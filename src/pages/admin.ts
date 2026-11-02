export const adminPage = `<main class="admin-page">
    <nav class="admin-navigation" aria-label="管理ページの操作">
        <a href="/product.html">プロダクトページへ</a>
        <div id="admin-actions" class="hidden">
            <div class="admin-action-buttons">
                <button type="button" id="admin-add">プロダクトを追加</button>
                <button type="button" id="admin-update">更新</button>
            </div>
        </div>
        <button type="button" id="admin-logout" class="hidden">ログアウト</button>
    </nav>
    <section id="admin-login" class="admin-notice">
        <h2>管理者ログイン</h2>
        <button type="button" id="admin-google-login">Googleでログイン</button>
    </section>
    <p id="admin-status" class="admin-status" aria-live="polite">ログイン状態を確認しています...</p>
    <section id="admin-editor" class="hidden">
        <p class="admin-order-help">編集内容は上部の「更新」でまとめて反映されます。縦3点をドラッグして並べ替えると自動で保存されます。</p>
        <div id="admin-product-list" class="admin-product-list"></div>
    </section>
</main>`;
