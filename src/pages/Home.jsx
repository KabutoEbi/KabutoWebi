import Header from "../components/Header";
import Articles from "../components/Articles";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";
import { Wrench, UserRound } from "lucide-react";
import Clothes from "../components/Clothes";

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
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
                    <div className="group bg-white rounded-3xl p-8 border border-black">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-300 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                                <Wrench size={40} className="invert" />
                            </div>
                            <h2 className="text-2xl font-bold text-black mb-4">Products</h2>
                            <p className="text-black mb-6 leading-relaxed">
                                これまでに制作した作品
                            </p>
                            <a 
                                href="/products" 
                                className="inline-flex items-center justify-center bg-green-300 text-black px-8 py-3 rounded-full font-medium"
                            >
                                <span>作品を見る</span>
                                <svg className="ml-2 w-5 h-5 transition-transform duration-300 origin-left group-hover:scale-x-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="group bg-white rounded-3xl p-8 border border-black">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-300 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                                <UserRound size={40} className="invert" />
                            </div>
                            <h2 className="text-2xl font-bold text-black mb-4">About</h2>
                            <p className="text-black mb-6 leading-relaxed">
                                自己紹介
                            </p>
                            <a 
                                href="/about" 
                                className="inline-flex items-center justify-center bg-green-300 text-black px-8 py-3 rounded-full font-medium"
                            >
                                <span>詳しく見る</span>
                                <svg className="ml-2 w-5 h-5 transition-transform duration-300 origin-left group-hover:scale-x-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Articles />
            <Clothes />
            <Notifications />
            <Footer />
        </div>
    );
}

export default Home;