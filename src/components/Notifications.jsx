import React from "react";

const Notifications = () => {
    const notifications = [
        { date: "2025年07月13日", content: "Productsを更新  ", type: "feature" },
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
                color: "bg-blue-100 text-blue-700 border-blue-200", 
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
            },
            feature: { 
                color: "bg-green-100 text-green-700 border-green-200", 
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" 
            },
            launch: { 
                color: "bg-purple-100 text-purple-700 border-purple-200", 
                icon: "M13 10V3L4 14h7v7l9-11h-7z" 
            }
        };
        return types[type] || types.update;
    };

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-800 mx-6">Notifications</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        サイトの更新情報やお知らせをお伝えします
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 3h6l5 5v11a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" />
                                </svg>
                                更新履歴
                            </h3>
                        </div>
                        
                        <div className="max-h-96 overflow-y-auto">
                            <div className="divide-y divide-gray-100">
                                {notifications.map((notification, index) => {
                                    const typeInfo = getTypeInfo(notification.type);
                                    return (
                                        <div 
                                            key={index}
                                            className="p-6 hover:bg-gray-50 transition-colors duration-200"
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