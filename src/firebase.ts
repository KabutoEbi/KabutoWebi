import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config.js";

export function firebaseReady(): boolean {
    return Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId);
}

const app = firebaseReady() ? initializeApp(firebaseConfig) : null;

export function getDatabase() {
    if (!app) throw new Error("FirebaseのWebアプリ設定がありません。");
    return getFirestore(app);
}

export function getAuthentication() {
    if (!app) throw new Error("FirebaseのWebアプリ設定がありません。");
    return getAuth(app);
}
