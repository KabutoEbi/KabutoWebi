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

function inputCell(row: HTMLTableRowElement, label: string, value: string | number, onInput: (value: string) => void, type = "text"): void {
    const cell = row.insertCell();
    const input = label === "説明" ? document.createElement("textarea") : document.createElement("input");
    if (input instanceof HTMLInputElement) input.type = type;
    input.value = String(value);
    input.setAttribute("aria-label", label);
    input.addEventListener("input", () => onInput(input.value));
    cell.appendChild(input);
}

function checkboxCell(row: HTMLTableRowElement, label: string, checked: boolean, onChange: (checked: boolean) => void): void {
    const cell = row.insertCell();
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = checked;
    input.setAttribute("aria-label", label);
    input.addEventListener("change", () => onChange(input.checked));
    cell.appendChild(input);
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
        renderTable();
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
        renderTable();
        setStatus("商品を削除しました。");
    } catch (error: unknown) {
        console.error("Product deletion failed:", error);
        setStatus("削除できませんでした。Firestoreの権限と接続を確認してください。", true);
    } finally {
        setBusy(false);
    }
}

function renderTable(): void {
    const container = element("admin-table-container");
    const table = document.createElement("table");
    table.className = "admin-table";
    const head = table.createTHead().insertRow();
    for (const name of ["表示順", "公開", "商品名", "説明", "使用技術", "リンク1表示名", "リンク1 URL", "リンク1を別タブで開く", "リンク2表示名", "リンク2 URL", "リンク2を別タブで開く", "操作"]) {
        const header = document.createElement("th");
        header.textContent = name;
        head.appendChild(header);
    }

    const body = table.createTBody();
    for (const product of products) {
        const row = body.insertRow();
        inputCell(row, "表示順", product.order, (value) => { product.order = Number(value); }, "number");
        checkboxCell(row, "公開", product.published, (value) => { product.published = value; });
        inputCell(row, "商品名", product.title, (value) => { product.title = value; });
        inputCell(row, "説明", product.description, (value) => { product.description = value; });
        inputCell(row, "使用技術", product.technology, (value) => { product.technology = value; });
        for (let index = 0; index < 2; index += 1) {
            const link = product.links[index];
            inputCell(row, `リンク${index + 1}表示名`, link.label, (value) => { link.label = value; });
            inputCell(row, `リンク${index + 1} URL`, link.url, (value) => { link.url = value; });
            checkboxCell(row, `リンク${index + 1}を別タブで開く`, link.newTab, (value) => { link.newTab = value; });
        }
        const actions = row.insertCell();
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
    }
    container.replaceChildren(table);
    applyTailwindDesign(container);
}

async function refreshProducts(): Promise<void> {
    const snapshot = await getDocs(collection(getDatabase(), "products"));
    products = snapshot.docs
        .map((entry) => normalizeProduct(entry.data(), entry.id))
        .sort((a, b) => a.order - b.order);
    renderTable();
    setStatus(`${products.length}件の商品を読み込みました。`);
}

async function showAuthenticated(user: User | null): Promise<void> {
    const login = element("admin-login");
    const editor = element("admin-editor");
    login.classList.toggle("hidden", Boolean(user));
    editor.classList.toggle("hidden", !user || !user.emailVerified || user.email?.toLowerCase() !== adminEmail);
    if (!user) {
        products = [];
        element("admin-table-container").replaceChildren();
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
        products.push(emptyProduct(nextOrder));
        renderTable();
        setStatus("新しい商品を追加しました。入力後にその行の保存を押してください。");
    });
    onAuthStateChanged(auth, (user) => { void showAuthenticated(user); });
}
