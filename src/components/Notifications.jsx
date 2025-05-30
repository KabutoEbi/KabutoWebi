import React from "react";

const Notifications = () => {
    return (
        <div className="text-center mt-4">
            <p className="font-bold text-2xl p-1 border-b-4 border-green-300 inline-block tracking-wide">Notifications</p>
            <div className="mt-4 h-48 overflow-y-scroll rounded max-w-xl mx-auto">
                <ul className="text-xl text-left bg-green-100 leading-loose p-5">
                    <li className="border-b border-green-400">2025年05月30日 一部UIを更新</li>
                    <li className="border-b border-green-400">2025年05月28日 一部UIを更新</li>
                    <li className="border-b border-green-400">2025年05月25日 一部UIを更新</li>
                    <li className="border-b border-green-400">2025年05月17日 一部UIを更新</li>
                    <li className="border-b border-green-400">2025年05月16日 Productsを更新</li>
                    <li className="border-b border-green-400">2025年04月29日 Productsを更新</li>
                    <li className="border-b border-green-400">2025年04月29日 Productsを更新</li>
                    <li className="border-b border-green-400">2025年04月29日 サイトを公開</li>
                </ul>
            </div>
        </div>
    );
}

export default Notifications;