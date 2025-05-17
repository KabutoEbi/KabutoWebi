import React from "react";

const Notifications = () => {
    return (
        <div className="text-center mt-4">
            <p className="font-bold text-2xl bg-green-300 border-t-2 border-gray-400 p-4 tracking-wide">Notifications</p>
            <div className="mt-4 h-48 overflow-y-scroll rounded ml-5 mr-5">
                <ul className="text-xl text-left bg-green-200 leading-loose p-5">
                    <li className="border-b border-green-400">2025年05月17日 一部UIを更新</li>
                    <li className="border-b border-green-400">2025年05月16日 Productsを更新</li>
                    <li className="border-b border-green-400">2025年04月29日 Productsを更新</li>
                    <li className="border-b border-green-400">2025年04月29日 Productsを更新</li>
                    <li className="border-b border-green-400">2025年04月29日 サイトを公開</li>
                    <li className="border-b border-green-400">-</li>
                    <li className="border-b border-green-400">-</li>
                </ul>
            </div>
        </div>
    );
}

export default Notifications;