# KabutoWebi

TypeScriptとTailwind CSSで構成したVercel向けサイトです。商品情報はCloud Firestoreの`products`コレクションで管理します。

## Firebaseの設定状況

Cloud Firestoreの`(default)`データベースは東京（`asia-northeast1`）に作成済みです。既存の商品15件は`products`コレクションに登録済みで、`firestore.rules`も反映済みです。Webアプリ設定は`src/firebase-config.ts`にあります。

管理者は`narenohatehe@gmail.com`の確認済みGoogleログインだけです。Googleアカウント側でも2段階認証を有効にしてください。

Googleログインのプロバイダーは有効化済みです。`kabutowebi.vercel.app`はFirebase Authenticationの承認済みドメインに追加済みです。管理画面は`https://kabutowebi.vercel.app/admin`です。ルールを変更した場合は`firebase deploy --only firestore:rules --project kabutowebi`で再反映します。

以降は管理画面で各行の「保存」を押すとFirestoreへ直接反映されます。削除した商品は復元できないため、確認ダイアログが表示されます。公開ページは`published`が`true`の商品だけを表示します。FirestoreはGoogleアカウントで2段階認証が設定されているかを判定できないため、その有効化はGoogleアカウントの設定で管理します。

ローカルでは`npm install`、`npm run build`を実行します。生成された`dist`がVercelの公開ディレクトリです。FirebaseのWebアプリ設定はブラウザに配布されるため、書き込み権限は`firestore.rules`で制御します。

## Vercelで公開

公開URLは`https://kabutowebi.vercel.app/`です。ビルドコマンドは`npm run build`、出力ディレクトリは`dist`です（`vercel.json`に設定済み）。
