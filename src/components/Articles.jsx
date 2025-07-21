import React from "react";

const Articles = () => {
    const articles = [
        {
            title: "天動説をグラフにする",
            url: "https://qiita.com/KabutoEbi/items/feb1e6f2bc097e6cfa04",
            category: "数学"
        },
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

    const getCategoryColor = () => "bg-green-200 text-green-700";

    return (
        <section className="py-2 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Articles
                        </h2>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <article
                            key={index}
                            className="group bg-white border border-black rounded-xl p-6"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                                    {article.category}
                                </span>
                                <svg
                                    className="w-5 h-5 text-black transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                </svg>
                            </div>

                            <h3 className="font-semibold text-black mb-4 leading-relaxed">
                                {article.title}
                            </h3>

                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
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
                        className="inline-flex items-center bg-green-300 text-black px-8 py-3 rounded-full font-medium hover:bg-green-200 transition-all duration-300 shadow hover:shadow-md"
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