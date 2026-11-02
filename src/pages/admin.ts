export const adminPage = `<main class="admin-page">
    <nav class="admin-navigation" aria-label="管理ページの操作">
        <a href="/product.html">プロダクトページへ</a>
        <button type="button" id="admin-logout" class="hidden">ログアウト</button>
    </nav>
    <section id="admin-login" class="admin-notice">
        <h2>管理者ログイン</h2>
        <button type="button" id="admin-google-login">Googleでログイン</button>
    </section>
    <p id="admin-status" class="admin-status" aria-live="polite">ログイン状態を確認しています...</p>
    <section id="admin-editor" class="hidden">
        <div class="admin-toolbar" aria-label="プロダクト管理操作">
            <button type="button" id="admin-add">プロダクトを追加</button>
        </div>
        <p class="admin-order-help">編集内容は各プロダクトの「更新」で反映されます。上へ・下へボタンでの並べ替えは自動で保存されます。</p>
        <div id="admin-product-list" class="admin-product-list"></div>
    </section>
</main>`;
