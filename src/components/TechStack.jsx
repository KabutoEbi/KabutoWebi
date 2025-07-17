import React from "react";
import { Laptop, Gamepad2, Smartphone, Globe, Code2 } from "lucide-react";

const TechStack = () => {
    const skills = [
        { tech: "C++", level: "ある程度", color: "bg-blue-500", icon: <Code2 size={28} /> },
        { tech: "AtCoder", level: "茶", color: "bg-purple-500", icon: <Laptop size={28} /> },
        { tech: "Unity", level: "ある程度", color: "bg-gray-400", icon: <Gamepad2 size={28} /> },
        { tech: "React", level: "ある程度", color: "bg-cyan-500", icon: <Laptop size={28} /> },
        { tech: "Flutter", level: "勉強中", color: "bg-blue-400", icon: <Smartphone size={28} /> },
        { tech: "Japanese", level: "ギリギリ", color: "bg-red-500", icon: <Globe size={28} /> }
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 bg-opacity-90">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-blue-300 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-gray-800 mx-6">技術スタック</h2>
                    <div className="w-16 h-1 bg-purple-300 rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
                            <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center text-white text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                {skill.icon}
                            </div>
                            <h3 className="font-bold text-gray-800 text-center mb-2">{skill.tech}</h3>
                            <div className="text-center">
                                <span className="bg-blue-50 px-3 py-1 rounded-full text-sm text-gray-700">
                                    {skill.level}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
