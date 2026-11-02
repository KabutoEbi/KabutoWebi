import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    type User,
} from "firebase/auth";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
} from "firebase/firestore";
import { applyTailwindDesign } from "./design.js";
import { adminEmail } from "./firebase-config.js";
import { getAuthentication, getDatabase } from "./firebase.js";
import { emptyProduct, normalizeProduct, validateProduct, type EditableProduct, type Product } from "./product-model.js";

let products: EditableProduct[] = [];
let productCards = new Map<EditableProduct, HTMLDetailsElement>();

function element(id: string): HTMLElement {
    const found = document.getElementById(id);
    if (!found) throw new Error(`Missing admin element: ${id}`);
    return found;
}

function setStatus(message: string, isError = false): void {
    const status = element("admin-status");
    status.textContent = message;
    status.classList.toggle("text-red-700", isError);
    status.classList.toggle("text-green-800", !isError);
}

function setBusy(busy: boolean): void {
    for (const button of document.querySelectorAll<HTMLButtonElement>("#admin-editor button")) {
        button.disabled = busy;
    }
}

function dataForFirestore(product: EditableProduct): Product {
    return {
        order: product.order,
        published: product.published,
        title: product.title.trim(),
        description: product.description,
        technology: product.technology,
        links: product.links.map((link) => ({
            label: link.label.trim(),
            url: link.url.trim(),
            newTab: link.newTab,
        })),
    };
}

function inputField(label: string, value: string | number, onInput: (value: string) => void, type = "text", wide = false): HTMLLabelElement {
    const field = document.createElement("label");
    field.className = "admin-field";
    if (wide) field.classList.add("admin-field-wide");
    const caption = document.createElement("span");
    caption.textContent = label;
    const input = type === "textarea" ? document.createElement("textarea") : document.createElement("input");
    if (input instanceof HTMLInputElement) input.type = type;
    input.value = String(value);
    input.addEventListener("input", () => onInput(input.value));
    field.append(caption, input);
    return field;
}

function checkboxField(label: string, checked: boolean, onChange: (checked: boolean) => void): HTMLLabelElement {
    const field = document.createElement("label");
    field.className = "admin-checkbox-field";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = checked;
    input.addEventListener("change", () => onChange(input.checked));
    const caption = document.createElement("span");
    caption.textContent = label;
    field.append(input, caption);
    return field;
}

async function saveProduct(product: EditableProduct): Promise<void> {
    const data = dataForFirestore(product);
    const issue = validateProduct(data);
    if (issue) {
        setStatus(issue, true);
        return;
    }

    setBusy(true);
    try {
        if (product.id) {
            await setDoc(doc(getDatabase(), "products", product.id), data);
        } else {
            const created = await addDoc(collection(getDatabase(), "products"), data);
            product.id = created.id;
        }
        setStatus(`「${data.title}」を保存しました。商品ページにも反映されます。`);
        renderProducts();
    } catch (error: unknown) {
        console.error("Product save failed:", error);
        setStatus("保存できませんでした。Firestoreの権限と接続を確認してください。", true);
    } finally {
        setBusy(false);
    }
}

async function removeProduct(product: EditableProduct): Promise<void> {
    if (!window.confirm(`「${product.title || "新しい商品"}」を削除しますか？`)) return;

    setBusy(true);
    try {
        if (product.id) await deleteDoc(doc(getDatabase(), "products", product.id));
        products = products.filter((entry) => entry !== product);
        renderProducts();
        setStatus("商品を削除しました。");
    } catch (error: unknown) {
        console.error("Product deletion failed:", error);
        setStatus("削除できませんでした。Firestoreの権限と接続を確認してください。", true);
    } finally {
        setBusy(false);
    }
}

function renderProducts(expand?: EditableProduct): void {
    const container = element("admin-product-list");
    const openProducts = new Set([...productCards].filter(([, card]) => card.open).map(([product]) => product));
    const nextCards = new Map<EditableProduct, HTMLDetailsElement>();
    const cards = document.createDocumentFragment();
    for (const product of products) {
        const card = document.createElement("details");
        card.className = "admin-product-card group";
        card.open = openProducts.has(product) || product === expand;
        const summary = document.createElement("summary");
        summary.className = "admin-product-summary";
        const title = document.createElement("span");
        title.className = "admin-product-title";
        title.textContent = product.title.trim() || "新しい商品";
        const meta = document.createElement("span");
        meta.className = "admin-product-meta";
        const order = document.createElement("span");
        order.textContent = `表示順 ${product.order}`;
        const visibility = document.createElement("span");
        visibility.textContent = product.published ? "公開" : "非公開";
        const chevron = document.createElement("span");
        chevron.className = "admin-product-chevron";
        chevron.setAttribute("aria-hidden", "true");
        chevron.textContent = "⌄";
        meta.append(order, visibility);
        summary.append(title, meta, chevron);

        const fields = document.createElement("div");
        fields.className = "admin-product-fields";
        fields.append(
            inputField("表示順", product.order, (value) => {
                product.order = Number(value);
                order.textContent = `表示順 ${value}`;
            }, "number"),
            checkboxField("公開", product.published, (checked) => {
                product.published = checked;
                visibility.textContent = checked ? "公開" : "非公開";
            }),
            inputField("商品名", product.title, (value) => {
                product.title = value;
                title.textContent = value.trim() || "新しい商品";
            }, "text", true),
            inputField("説明", product.description, (value) => { product.description = value; }, "textarea", true),
            inputField("使用技術", product.technology, (value) => { product.technology = value; }, "text", true),
        );
        for (let index = 0; index < 2; index += 1) {
            const link = product.links[index];
            const group = document.createElement("fieldset");
            group.className = "admin-link-group";
            const legend = document.createElement("legend");
            legend.textContent = `リンク ${index + 1}`;
            group.append(
                legend,
                inputField("表示名", link.label, (value) => { link.label = value; }),
                inputField("URL", link.url, (value) => { link.url = value; }),
                checkboxField("別タブで開く", link.newTab, (checked) => { link.newTab = checked; }),
            );
            fields.appendChild(group);
        }
        const actions = document.createElement("div");
        actions.className = "admin-card-actions";
        const save = document.createElement("button");
        save.type = "button";
        save.className = "admin-primary-button";
        save.textContent = "保存";
        save.addEventListener("click", () => { void saveProduct(product); });
        actions.appendChild(save);
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "admin-delete-button";
        remove.textContent = "削除";
        remove.addEventListener("click", () => { void removeProduct(product); });
        actions.appendChild(remove);
        fields.appendChild(actions);
        card.append(summary, fields);
        cards.appendChild(card);
        nextCards.set(product, card);
    }
    container.replaceChildren(cards);
    productCards = nextCards;
    applyTailwindDesign(container);
}

async function refreshProducts(): Promise<void> {
    const snapshot = await getDocs(collection(getDatabase(), "products"));
    products = snapshot.docs
        .map((entry) => normalizeProduct(entry.data(), entry.id))
        .sort((a, b) => a.order - b.order);
    renderProducts();
    setStatus(`${products.length}件の商品を読み込みました。`);
}

async function showAuthenticated(user: User | null): Promise<void> {
    const login = element("admin-login");
    const editor = element("admin-editor");
    const isAdmin = Boolean(user?.emailVerified && user.email?.toLowerCase() === adminEmail);
    element("admin-heading").classList.toggle("hidden", !isAdmin);
    login.classList.toggle("hidden", isAdmin);
    editor.classList.toggle("hidden", !isAdmin);
    if (!user) {
        products = [];
        productCards.clear();
        element("admin-product-list").replaceChildren();
        setStatus("管理者としてログインしてください。");
        return;
    }

    element("admin-user").textContent = user.email ?? "ログイン中";
    if (user.email?.toLowerCase() !== adminEmail) {
        setStatus("このGoogleアカウントには管理権限がありません。", true);
        return;
    }
    if (!user.emailVerified) {
        setStatus("メールアドレスを確認済みのGoogleアカウントでログインしてください。", true);
        return;
    }
    try {
        await refreshProducts();
    } catch (error: unknown) {
        console.error("Admin product loading failed:", error);
        editor.classList.add("hidden");
        setStatus("商品を読み込めませんでした。Firestoreの権限と接続を確認してください。", true);
    }
}

export function initializeAdmin(): void {
    const auth = getAuthentication();
    element("admin-google-login").addEventListener("click", async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error: unknown) {
            console.error("Google sign-in failed:", error);
            setStatus("Googleでログインできませんでした。認証プロバイダーの設定を確認してください。", true);
        }
    });
    element("admin-logout").addEventListener("click", () => { void signOut(auth); });
    element("admin-add").addEventListener("click", () => {
        const nextOrder = Math.max(0, ...products.map((product) => product.order)) + 1;
        const product = emptyProduct(nextOrder);
        products.push(product);
        renderProducts(product);
        setStatus("新しい商品を追加しました。入力後に保存を押してください。");
    });
    onAuthStateChanged(auth, (user) => { void showAuthenticated(user); });
}
