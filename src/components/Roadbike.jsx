import React from "react";

const Roadbike = () => {
    const bikeSpecs = [
        { label: "ブランド", value: "LOUIS GARNEAU" },
        { label: "モデル", value: "AXIS" },
        { label: "フレーム素材", value: "アルミ" },
        { label: "重量", value: "約9.4kg" },
        { label: "変速段数", value: "18段" },
        { label: "タイヤサイズ", value: "700×25C" }
    ];

    const ridingData = [
        { label: "総走行距離", value: "約500.km", color: "text-blue-600" },
        { label: "最長距離", value: "110km", color: "text-green-600" },
        { label: "平均速度", value: "25km/h", color: "text-purple-600" },
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-blue-300 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-gray-800 mx-6">ロードバイク</h2>
                    <div className="w-16 h-1 bg-purple-300 rounded-full"></div>
                </div>
                
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">愛車スペック</h3>
                    <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {bikeSpecs.map((spec, index) => (
                            <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <p className="text-sm text-gray-600">{spec.label}</p>
                                        <p className="font-semibold text-gray-800">{spec.value}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">ライディングデータ</h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {ridingData.map((data, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-100 text-center">
                                <p className="text-sm text-gray-600 mb-2">{data.label}</p>
                                <p className={`text-2xl font-bold ${data.color}`}>{data.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <div className="bg-blue-50 p-6 rounded-xl inline-block max-w-3xl">
                        <p className="text-gray-700 text-lg italic leading-relaxed">
                            暇なときにふらっとサイクリングしてます．そろそろ新しいチャリほしい．
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadbike;
