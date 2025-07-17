import React from "react";

const TravelDestinations = () => {
    const destinations = [
        { name: "北海道" },
        { name: "神奈川" },
        { name: "東京" },
        { name: "石川" },
        { name: "滋賀" },
        { name: "兵庫" },
        { name: "京都" },
        { name: "大阪" },
        { name: "奈良" },
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 bg-opacity-90">
                <div className="flex items-center justify-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Solo Travel
                        </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((destination, index) => (
                        <div key={index} className="group bg-white p-6 rounded-xl border border-black">
                            <h3 className="font-bold text-gray-800 text-center text-xl">{destination.name}</h3>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                    <div className="bg-green-100 p-4 rounded-lg inline-block">
                        <p className="text-black font-medium">
                            これまでに訪れた都道府県: <span className="font-bold">{destinations.length}箇所</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelDestinations;
