import React from "react";

const Articles = () => {
    return (
        <div className="text-center mt-4">
            <p className="font-bold text-2xl bg-green-300 border-t-2 border-gray-400 p-4 tracking-wide">Articles</p>
            <ul className="mt-4 text-xl">
                <li className="border-b border-green-400 p-2"><a href="https://qiita.com/KabutoEbi/items/6b43bd498f3827ea29ab" target="_blank" rel="noopener noreferrer">【高専】Gitプロキシ設定</a></li>
                <li className="border-b border-green-400 p-2"><a href="https://qiita.com/KabutoEbi/items/ca4d1f4e2b4ab7b3804e" target="_blank" rel="noopener noreferrer">[Windows]Apple Musicの音が勝手に変わるとき</a></li>
                <li className="border-b border-green-400 p-2"><a href="https://qiita.com/KabutoEbi/items/16753cae7f433e0ec461" target="_blank" rel="noopener noreferrer">Arduinoで2進数時計を作る</a></li>
                <li className="border-b border-green-400 p-2"><a href="https://qiita.com/KabutoEbi/items/25f471faf438e85dcf94" target="_blank" rel="noopener noreferrer">高専プロコン35 参加記</a></li>
            </ul>
        </div>
    );
};

export default Articles;