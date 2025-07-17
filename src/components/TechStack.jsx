import React from "react";
import { Laptop, Gamepad2, Smartphone, Globe, Code2 } from "lucide-react";

const TechStack = () => {
    const skills = [
        { tech: "C++", level: "ある程度", icon: <Code2 size={28} color="#000" /> },
        { tech: "AtCoder", level: "茶", icon: <Laptop size={28} color="#000" /> },
        { tech: "Unity", level: "ある程度", icon: <Gamepad2 size={28} color="#000" /> },
        { tech: "React", level: "ある程度", icon: <Laptop size={28} color="#000" /> },
        { tech: "Flutter", level: "勉強中", icon: <Smartphone size={28} color="#000" /> },
        { tech: "Japanese", level: "ギリギリ", icon: <Globe size={28} color="#000" /> }
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 bg-opacity-90">
                <div className="flex items-center justify-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Tech Stack
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="group bg-white p-6 rounded-xl border border-black">
                            <div className={`w-12 h-12 bg-green-300 rounded-lg flex items-center justify-center text-white text-xl mb-4 mx-auto`}>
                                {skill.icon}
                            </div>
                            <h3 className="font-bold text-gray-800 text-center mb-2">{skill.tech}</h3>
                            <div className="text-center">
                                <span className="bg-green-200 px-3 py-1 rounded-full text-sm text-green-700">
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
