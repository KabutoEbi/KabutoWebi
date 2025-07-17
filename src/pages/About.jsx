import React from "react";
import { Laptop, Bike, Backpack } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TechStack from "../components/TechStack";
import TravelDestinations from "../components/Travel";
import Roadbike from "../components/Roadbike";
import Timeline from "../components/Timeline";

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-8">
                        <img
                            src="/icon.jpg"
                            alt="KabutoEbi Icon"
                            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white mx-auto transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        KabutoEbi
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 text-black">
                        <span className="bg-green-200 px-4 py-2 rounded-full flex items-center gap-2"><Laptop size={18} />プログラミング</span>
                        <span className="bg-green-200 px-4 py-2 rounded-full flex items-center gap-2"><Bike size={18} />ロードバイク</span>
                        <span className="bg-green-200 px-4 py-2 rounded-full flex items-center gap-2"><Backpack size={18} />1人旅</span>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl p-8 md:p-12">
                        <div className="flex items-center justify-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                Introduction
                            </h2>
                        </div>
                        <div className="text-center">
                            <div className="space-y-4 max-w-md mx-auto">
                                <div className="bg-green-100 p-4 rounded-lg">
                                    <p className="text-lg text-black">高専3年生</p>
                                </div>
                                <div className="bg-green-100 p-4 rounded-lg">
                                    <p className="text-lg text-black">電気情報工学科</p>
                                    <p className="text-sm text-black">(電気分野は嫌い)</p>
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