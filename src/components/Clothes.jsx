
const Clothes = () => {
    return (
        <div className="w-full flex flex-col items-center my-8">
            <div className="text-center mb-8 mt-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    T-shirts
                </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <div className="border border-black rounded-xl overflow-hidden">
                    <iframe
                        height="162"
                        width="375"
                        src="https://suzuri.jp/KabutoEbi/18324437/t-shirt/s/white/embed"
                        title="天動説グラフTシャツ"
                        style={{ border: "none" }}
                        allowFullScreen
                    />
                </div>
                <div className="border border-black rounded-xl overflow-hidden">
                    <iframe
                        height="162"
                        width="375"
                        src="https://suzuri.jp/KabutoEbi/17123273/t-shirt/s/white/embed"
                        title="The Kone"
                        style={{ border: "none" }}
                        allowFullScreen
                    />
                </div>
            </div>

            <div className="text-center mt-12">
                <a
                    href="https://suzuri.jp/KabutoEbi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-300 text-black px-8 py-3 rounded-full font-medium hover:bg-green-200 transition-all duration-300 shadow hover:shadow-md"
                >
                    <span>SUZURIで他のグッズも見る</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Clothes;
