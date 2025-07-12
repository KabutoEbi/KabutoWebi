import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    const skills = [
        { tech: "C++", level: "ある程度", color: "bg-blue-500" },
        { tech: "C・C#", level: "そこそこ", color: "bg-purple-500" },
        { tech: "Unity", level: "ある程度", color: "bg-gray-700" },
        { tech: "React", level: "ある程度", color: "bg-cyan-500" },
        { tech: "Flutter", level: "勉強中", color: "bg-blue-400" },
        { tech: "Japanese", level: "ギリギリ", color: "bg-red-500" }
    ];

    const timeline = [
        { year: "2007", event: "誕生", icon: "🎂" },
        { year: "2014", event: "小学校入学", icon: "🎒" },
        { year: "2020", event: "中学校入学", icon: "📚" },
        { year: "2023", event: "舞鶴工業高等専門学校入学", icon: "🎓" },
        { year: "2025", event: "在学中", icon: "💻" }
    ];

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

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 bg-opacity-90">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800 mx-6">経歴</h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                        <div className="space-y-6 max-w-xl mx-auto">
                            {timeline.map((item, index) => (
                                <div key={index} className="flex items-center space-x-6 hover:transform hover:translate-x-2 transition-transform duration-300">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                                        {item.icon}
                                    </div>
                                    <div className="flex-grow bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border-l-4 border-green-400">
                                        <div className="font-bold text-gray-800">{item.year}</div>
                                        <div className="text-gray-600">{item.event}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 bg-opacity-90">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800 mx-6">技術スタック</h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
                                    <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center text-white text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                        💻
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-center mb-2">{skill.tech}</h3>
                                    <div className="text-center">
                                        <span className="bg-gradient-to-r from-green-100 to-blue-100 px-3 py-1 rounded-full text-sm text-gray-700">
                                            {skill.level}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default About;