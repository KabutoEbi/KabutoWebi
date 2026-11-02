import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    type User,
} from "firebase/auth";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    writeBatch,
    type WriteBatch,
} from "firebase/firestore";
import { applyTailwindDesign } from "./design.js";
import { adminEmail } from "./firebase-config.js";
import { getAuthentication, getDatabase } from "./firebase.js";
import { compareProducts, emptyProduct, normalizeProduct, validateProduct, type EditableProduct, type Product } from "./product-model.js";

let products: EditableProduct[] = [];
let productCards = new Map<EditableProduct, HTMLDetailsElement>();
let busy = false;
let draggedProduct: EditableProduct | null = null;
let dropTarget: HTMLElement | null = null;

function clearDropTarget(): void {
    dropTarget?.classList.remove("border-t-4", "border-b-4", "border-emerald-500");
    dropTarget = null;
}

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

function setBusy(value: boolean): void {
    busy = value;
    for (const button of document.querySelectorAll<HTMLButtonElement>("#admin-editor button, #admin-logout")) {
        button.disabled = busy;
    }
}

function queueOrderUpdates(batch: WriteBatch, excluded?: EditableProduct): boolean {
    let changed = false;
    products.forEach((product, index) => {
        if (!product.id || product === excluded || product.order === index + 1) return;
        batch.update(doc(getDatabase(), "products", product.id), { order: index + 1 });
        changed = true;
    });
    return changed;
}

function syncLocalOrder(): void {
    products.forEach((product, index) => { product.order = index + 1; });
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
    const data = { ...dataForFirestore(product), order: products.indexOf(product) + 1 };
    const issue = validateProduct(data);
    if (issue) {
        setStatus(issue, true);
        return;
    }

    setBusy(true);
    try {
        const database = getDatabase();
        const batch = writeBatch(database);
        const reference = product.id ? doc(database, "products", product.id) : doc(collection(database, "products"));
        batch.set(reference, data);
        queueOrderUpdates(batch, product);
        await batch.commit();
        product.id = reference.id;
        syncLocalOrder();
        setStatus(data.published
            ? `「${data.title}」を更新しました。プロダクトページにも反映されます。`
            : `「${data.title}」を非公開で更新しました。`);
        renderProducts();
    } catch (error: unknown) {
        console.error("Product save failed:", error);
        setStatus("更新できませんでした。Firestoreの権限と接続を確認してください。", true);
    } finally {
        setBusy(false);
    }
}

async function removeProduct(product: EditableProduct): Promise<void> {
    if (!window.confirm(`「${product.title || "新しいプロダクト"}」を削除しますか？`)) return;

    setBusy(true);
    try {
        if (product.id) await deleteDoc(doc(getDatabase(), "products", product.id));
        products = products.filter((entry) => entry !== product);
        renderProducts();
        setStatus("プロダクトを削除しました。");
    } catch (error: unknown) {
        console.error("Product deletion failed:", error);
        setStatus("削除できませんでした。Firestoreの権限と接続を確認してください。", true);
    } finally {
        setBusy(false);
    }
}

async function moveProduct(product: EditableProduct, destination: number, focusHandle = false): Promise<void> {
    const index = products.indexOf(product);
    if (busy || index < 0 || destination < 0 || destination >= products.length || destination === index) return;

    const original = [...products];
    products.splice(index, 1);
    products.splice(destination, 0, product);
    setBusy(true);
    renderProducts();
    try {
        const batch = writeBatch(getDatabase());
        const changed = queueOrderUpdates(batch);
        if (changed) await batch.commit();
        syncLocalOrder();
        setStatus(changed
            ? "並び順を保存しました。プロダクトページにも反映されます。"
            : "未保存のプロダクトを並べ替えました。更新するとプロダクトページにも反映されます。");
    } catch (error: unknown) {
        products = original;
        renderProducts();
        console.error("Product reordering failed:", error);
        setStatus("並び順を保存できませんでした。Firestoreの権限と接続を確認してください。", true);
    } finally {
        setBusy(false);
        if (focusHandle) productCards.get(product)?.parentElement?.querySelector<HTMLButtonElement>(".admin-drag-handle")?.focus();
    }
}

function renderProducts(expand?: EditableProduct): void {
    const container = element("admin-product-list");
    clearDropTarget();
    const openProducts = new Set([...productCards].filter(([, card]) => card.open).map(([product]) => product));
    const nextCards = new Map<EditableProduct, HTMLDetailsElement>();
    const cards = document.createDocumentFragment();
    for (const [index, product] of products.entries()) {
        const entry = document.createElement("div");
        entry.className = "admin-product-entry";
        const card = document.createElement("details");
        card.className = "admin-product-card group";
        card.open = openProducts.has(product) || product === expand;
        const summary = document.createElement("summary");
        summary.className = "admin-product-summary";
        const title = document.createElement("span");
        title.className = "admin-product-title";
        title.textContent = product.title.trim() || "新しいプロダクト";
        const meta = document.createElement("span");
        meta.className = "admin-product-meta";
        const order = document.createElement("span");
        order.textContent = `表示順 ${index + 1}`;
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
            checkboxField("公開", product.published, (checked) => {
                product.published = checked;
                visibility.textContent = checked ? "公開" : "非公開";
            }),
            inputField("プロダクト名", product.title, (value) => {
                product.title = value;
                title.textContent = value.trim() || "新しいプロダクト";
            }, "text", true),
            inputField("説明", product.description, (value) => { product.description = value; }, "textarea", true),
            inputField("使用技術", product.technology, (value) => { product.technology = value; }, "text", true),
        );
        for (const [linkIndex, link] of product.links.entries()) {
            const group = document.createElement("fieldset");
            group.className = "admin-link-group";
            const legend = document.createElement("legend");
            legend.textContent = `リンク ${linkIndex + 1}`;
            group.append(
                legend,
                inputField("表示名", link.label, (value) => { link.label = value; }),
                inputField("URL", link.url, (value) => { link.url = value; }),
                checkboxField("別タブで開く", link.newTab, (checked) => { link.newTab = checked; }),
            );
            if (linkIndex === 1) {
                const removeLink = document.createElement("button");
                removeLink.type = "button";
                removeLink.className = "admin-secondary-button";
                removeLink.textContent = "リンク2を削除";
                removeLink.addEventListener("click", () => {
                    product.links.splice(1, 1);
                    renderProducts(product);
                });
                group.appendChild(removeLink);
            }
            fields.appendChild(group);
        }
        if (product.links.length < 2) {
            const addLink = document.createElement("button");
            addLink.type = "button";
            addLink.className = "admin-secondary-button admin-add-link";
            addLink.textContent = "リンク2を追加";
            addLink.addEventListener("click", () => {
                product.links.push({ label: "", url: "", newTab: true });
                renderProducts(product);
                productCards.get(product)?.querySelector<HTMLInputElement>(".admin-link-group:last-of-type input[type='text']")?.focus();
            });
            fields.appendChild(addLink);
        }
        const actions = document.createElement("div");
        actions.className = "admin-card-actions";
        const save = document.createElement("button");
        save.type = "button";
        save.className = "admin-primary-button";
        save.textContent = "更新";
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
        const handle = document.createElement("button");
        handle.type = "button";
        handle.className = "admin-drag-handle";
        handle.draggable = true;
        handle.setAttribute("aria-label", `「${product.title.trim() || "新しいプロダクト"}」をドラッグして並べ替え`);
        handle.setAttribute("aria-keyshortcuts", "ArrowUp ArrowDown");
        handle.title = "ドラッグして並べ替え（上下キーでも移動）";
        for (let dot = 0; dot < 3; dot += 1) {
            const marker = document.createElement("span");
            marker.className = "admin-drag-dot";
            marker.setAttribute("aria-hidden", "true");
            handle.appendChild(marker);
        }
        handle.addEventListener("dragstart", (event) => {
            if (busy || !event.dataTransfer) {
                event.preventDefault();
                return;
            }
            draggedProduct = product;
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", product.id ?? "new-product");
            entry.classList.add("opacity-50");
        });
        handle.addEventListener("dragend", () => {
            draggedProduct = null;
            clearDropTarget();
            entry.classList.remove("opacity-50");
        });
        handle.addEventListener("keydown", (event) => {
            if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
            event.preventDefault();
            void moveProduct(product, products.indexOf(product) + (event.key === "ArrowUp" ? -1 : 1), true);
        });
        entry.addEventListener("dragover", (event) => {
            if (busy || !draggedProduct || draggedProduct === product) return;
            event.preventDefault();
            if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
            const bounds = entry.getBoundingClientRect();
            const after = event.clientY >= bounds.top + bounds.height / 2;
            if (dropTarget === entry && entry.classList.contains(after ? "border-b-4" : "border-t-4")) return;
            clearDropTarget();
            dropTarget = entry;
            entry.classList.add(after ? "border-b-4" : "border-t-4", "border-emerald-500");
        });
        entry.addEventListener("drop", (event) => {
            const source = draggedProduct;
            if (!source || source === product) return;
            event.preventDefault();
            const after = entry.classList.contains("border-b-4")
                || (!entry.classList.contains("border-t-4")
                    && event.clientY >= entry.getBoundingClientRect().top + entry.getBoundingClientRect().height / 2);
            clearDropTarget();
            draggedProduct = null;
            const sourceIndex = products.indexOf(source);
            let destination = products.indexOf(product) + (after ? 1 : 0);
            if (sourceIndex < destination) destination -= 1;
            void moveProduct(source, destination);
        });
        entry.append(handle, card);
        cards.appendChild(entry);
        nextCards.set(product, card);
    }
    container.replaceChildren(cards);
    productCards = nextCards;
    applyTailwindDesign(container);
    setBusy(busy);
}

async function refreshProducts(): Promise<void> {
    const snapshot = await getDocs(collection(getDatabase(), "products"));
    products = snapshot.docs
        .map((entry) => normalizeProduct(entry.data(), entry.id))
        .sort(compareProducts);
    renderProducts();
    setStatus(`${products.length}件のプロダクトを読み込みました。`);
}

async function showAuthenticated(user: User | null): Promise<void> {
    const login = element("admin-login");
    const editor = element("admin-editor");
    const isAdmin = Boolean(user?.emailVerified && user.email?.toLowerCase() === adminEmail);
    element("admin-logout").classList.toggle("hidden", !user);
    login.classList.toggle("hidden", isAdmin);
    editor.classList.toggle("hidden", !isAdmin);
    if (!user) {
        draggedProduct = null;
        clearDropTarget();
        products = [];
        productCards.clear();
        element("admin-product-list").replaceChildren();
        setStatus("管理者としてログインしてください。");
        return;
    }

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
        setStatus("プロダクトを読み込めませんでした。Firestoreの権限と接続を確認してください。", true);
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
        const product = emptyProduct(0);
        products.unshift(product);
        renderProducts(product);
        setStatus("新しいプロダクトを追加しました。入力後に更新を押してください。");
    });
    onAuthStateChanged(auth, (user) => { void showAuthenticated(user); });
}
