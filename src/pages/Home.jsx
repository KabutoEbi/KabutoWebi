import Header from "../components/Header";
import Articles from "../components/Articles";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            <Header />
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-8">
                        <img 
                            src="/kabutoebi.png" 
                            alt="kabutoebi" 
                            className="w-60"
                        />
                    </div>
                    <p className="text-lg mb-8">
                        作品とか色々載せていきます
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
                    <div className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                ⚒️
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Products</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                これまでに制作した作品
                            </p>
                            <a 
                                href="/products" 
                                className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
                            >
                                <span>作品を見る</span>
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                👨‍💻
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                自己紹介
                            </p>
                            <a 
                                href="/about" 
                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
                            >
                                <span>詳しく見る</span>
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Articles />
            <Notifications />
            <Footer />
        </div>
    );
}

export default Home;