import React from "react";
import { timelineIcons } from "./LucideTimelineIcons";

const Timeline = () => {
    const timeline = [
        { year: "2007", event: "誕生" },
        { year: "2014", event: "小学校入学" },
        { year: "2020", event: "中学校入学" },
        { year: "2023", event: "舞鶴工業高等専門学校入学" },
        { year: "2025", event: "在学中" }
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 bg-opacity-90">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-blue-300 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-gray-800 mx-6">経歴</h2>
                    <div className="w-16 h-1 bg-purple-300 rounded-full"></div>
                </div>
                <div className="space-y-6 max-w-xl mx-auto">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex items-center space-x-6 hover:transform hover:translate-x-2 transition-transform duration-300">
                            <div className="flex-shrink-0 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                                {(() => {
                                    const LucideIcon = timelineIcons[item.event];
                                    return LucideIcon ? <LucideIcon size={32} color="#fff" /> : null;
                                })()}
                            </div>
                            <div className="flex-grow bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                                <div className="font-bold text-gray-800">{item.year}</div>
                                <div className="text-gray-600">{item.event}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
