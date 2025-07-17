import React from "react";
import { Cake, School, BookOpen, GraduationCap, Laptop2 } from "lucide-react";

const Timeline = () => {
    const timeline = [
        { year: "2007", event: "誕生", icon: Cake },
        { year: "2014", event: "小学校入学", icon: School },
        { year: "2020", event: "中学校入学", icon: BookOpen },
        { year: "2023", event: "舞鶴工業高等専門学校入学", icon: GraduationCap },
        { year: "2025", event: "在学中", icon: Laptop2 }
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 bg-opacity-90">
                <div className="flex items-center justify-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Time Line
                    </h2>
                </div>
                <div className="space-y-6 max-w-xl mx-auto">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex items-center space-x-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-green-300 rounded-full flex items-center justify-center text-black text-xl">
                                {item.icon && <item.icon size={32} />}
                            </div>
                            <div className="flex-grow bg-gray-50 p-4 rounded-lg border-l-4 border-green-300">
                                <div className="font-bold text-black">{item.year}</div>
                                <div className="text-black">{item.event}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
