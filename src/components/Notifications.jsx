import React from "react";

const Notifications = () => {
    const notifications = [
        { date: "2025年07月17日", content: "UIを大幅更新", type: "update" },
        { date: "2025年07月17日", content: "Productsを更新", type: "update" },
        { date: "2025年07月13日", content: "Aboutを更新", type: "update" },
        { date: "2025年07月13日", content: "活動統計を追加", type: "feature" },
        { date: "2025年07月13日", content: "Productsを更新", type: "feature" },
        { date: "2025年07月13日", content: "一部UIを更新", type: "update" },
        { date: "2025年07月13日", content: "Productsを更新", type: "feature" },
        { date: "2025年07月13日", content: "UIを大幅更新", type: "update" },
        { date: "2025年05月30日", content: "一部UIを更新", type: "update" },
        { date: "2025年05月28日", content: "一部UIを更新", type: "update" },
        { date: "2025年05月25日", content: "一部UIを更新", type: "update" },
        { date: "2025年05月17日", content: "一部UIを更新", type: "update" },
        { date: "2025年05月16日", content: "Productsを更新", type: "feature" },
        { date: "2025年04月29日", content: "Productsを更新", type: "feature" },
        { date: "2025年04月29日", content: "Productsを更新", type: "feature" },
        { date: "2025年04月29日", content: "サイトを公開", type: "launch" }
    ];

    const getTypeInfo = (type) => {
        const types = {
            update: {
                color: "bg-green-100 text-green-700 border-green-200",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            },
            feature: {
                color: "bg-green-100 text-green-700 border-green-200",
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6"
            },
            launch: {
                color: "bg-green-100 text-green-700 border-green-200",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
            }
        };
        return types[type] || types.update;
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Notifications
                        </h2>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl border border-black">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 3h6l5 5v11a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" />
                                </svg>
                                更新履歴
                            </h3>
                        </div>

                        <div className="max-h-96 overflow-y-auto">
                            <div className="divide-y divide-gray-400">
                                {notifications.map((notification, index) => {
                                    const typeInfo = getTypeInfo(notification.type);
                                    return (
                                        <div
                                            key={index}
                                            className="p-6"
                                        >
                                            <div className="flex items-start space-x-4">
                                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${typeInfo.color} flex items-center justify-center border`}>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={typeInfo.icon} />
                                                    </svg>
                                                </div>

                                                <div className="flex-grow min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm font-medium text-gray-900">
                                                            {notification.content}
                                                        </p>
                                                        <time className="text-sm text-gray-500 flex-shrink-0 ml-4">
                                                            {notification.date}
                                                        </time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-b-2xl">
                            <p className="text-sm text-gray-600 text-center">
                                最新の更新情報は随時こちらでお知らせします
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notifications;