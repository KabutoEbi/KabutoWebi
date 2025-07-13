import React from "react";

const Articles = () => {
    const articles = [
        {
            title: "レールガンのためのローレンツ力",
            url: "https://qiita.com/KabutoEbi/items/589d67061ed960c8596f",
            category: "電磁気学"
        },
        {
            title: "FlutterとFirebaseの連携時の問題",
            url: "https://qiita.com/KabutoEbi/items/5fb2aba39177d603f63a",
            category: "Flutter"
        },
        {
            title: "【高専】Gitプロキシ設定",
            url: "https://qiita.com/KabutoEbi/items/6b43bd498f3827ea29ab",
            category: "Git"
        },
        {
            title: "[Windows]Apple Musicの音が勝手に変わるとき",
            url: "https://qiita.com/KabutoEbi/items/ca4d1f4e2b4ab7b3804e",
            category: "Windows"
        },
        {
            title: "Arduinoで2進数時計を作る",
            url: "https://qiita.com/KabutoEbi/items/16753cae7f433e0ec461",
            category: "Arduino"
        },
        {
            title: "高専プロコン35 参加記",
            url: "https://qiita.com/KabutoEbi/items/25f471faf438e85dcf94",
            category: "Event"
        }
    ];

    const getCategoryColor = (category) => {
        const colors = {
            Physics: "bg-purple-100 text-purple-700",
            Flutter: "bg-blue-100 text-blue-700",
            Git: "bg-orange-100 text-orange-700",
            Arduino: "bg-green-100 text-green-700",
            Event: "bg-pink-100 text-pink-700"
        };
        return colors[category] || "bg-gray-100 text-gray-700";
    };

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-800 mx-6">Articles</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        技術的な発見や学習内容をQiitaで共有しています
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <article 
                            key={index}
                            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                                    {article.category}
                                </span>
                                <svg 
                                    className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                            
                            <h3 className="font-semibold text-gray-800 mb-4 leading-relaxed group-hover:text-green-600 transition-colors duration-300">
                                {article.title}
                            </h3>
                            
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-300"
                            >
                                <span>Qiita</span>
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://qiita.com/KabutoEbi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <span>すべての記事を見る</span>
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Articles;