import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TechStack from "../components/TechStack";
import TravelDestinations from "../components/Travel";
import Roadbike from "../components/Roadbike";
import Timeline from "../components/Timeline";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            <Header />
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-8">
                        <img 
                            src="/icon.jpg" 
                            alt="KabutoEbi Icon" 
                            className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl border-4 border-white mx-auto transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        KabutoEbi
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                        <span className="bg-white px-4 py-2 rounded-full shadow-md">💻 プログラミング</span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-md">🚴 ロードバイク</span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-md">🎒 1人旅</span>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 bg-opacity-90">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800 mx-6">自己紹介</h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                        <div className="text-center">
                            <div className="space-y-4 max-w-md mx-auto">
                                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                                    <p className="text-lg text-gray-700">高専3年生</p>
                                </div>
                                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                                    <p className="text-lg text-gray-700">電気情報工学科</p>
                                    <p className="text-sm text-gray-500">(電気分野は嫌い)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Timeline />
                <TechStack />
                <Roadbike />
                <TravelDestinations />
            </div>
            
            <Footer />
        </div>
    );
};

export default About;