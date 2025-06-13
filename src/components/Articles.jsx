import React from "react";

const Articles = () => {
    return (
        <div className="text-center mt-4">
            <p className="font-bold text-2xl p-1 border-b-4 border-green-300 inline-block tracking-wide">Articles</p>
            <ul className="mt-4">
                <li className="p-2">
                    <a
                        href="https://qiita.com/KabutoEbi/items/5fb2aba39177d603f63a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-b border-green-400 pb-1 w-[30ch] text-center"
                    >
                        FlutterとFirebaseの連携時の問題
                    </a>
                </li>
                <li className="p-2">
                    <a
                        href="https://qiita.com/KabutoEbi/items/6b43bd498f3827ea29ab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-b border-green-400 pb-1 w-[30ch] text-center"
                    >
                        【高専】Gitプロキシ設定
                    </a>
                </li>
                <li className="p-2">
                    <a
                        href="https://qiita.com/KabutoEbi/items/16753cae7f433e0ec461"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-b border-green-400 pb-1 min-w-[30ch] text-center"
                    >
                        Arduinoで2進数時計を作る
                    </a>
                </li>
                <li className="p-2">
                    <a
                        href="https://qiita.com/KabutoEbi/items/25f471faf438e85dcf94"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-b border-green-400 pb-1 min-w-[30ch] text-center"
                    >
                        高専プロコン35 参加記
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Articles;