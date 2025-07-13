import React from "react";

const TravelDestinations = () => {
    const destinations = [
        { name: "北海道" },
        { name: "神奈川" },
        { name: "東京" },
        { name: "石川" },
        { name: "滋賀" },
        { name: "京都" },
    ];

    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 bg-opacity-90">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-gray-800 mx-6">一人旅</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((destination, index) => (
                        <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
                            <h3 className="font-bold text-gray-800 text-center text-xl">{destination.name}</h3>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg inline-block">
                        <p className="text-gray-700 font-medium">
                            これまでに訪れた都道府県: <span className="font-bold text-green-600">{destinations.length}箇所</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelDestinations;
