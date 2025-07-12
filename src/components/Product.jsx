import React from "react";

const Product = ({ Name, description, links = [] }) => {
    return (
        <article className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {Name}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                    {description}
                </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
                {links.map((link, idx) => (
                    link.isInProgress ? (
                        <span
                            key={idx}
                            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium cursor-default border border-gray-200"
                        >
                            {link.label}
                        </span>
                    ) : (
                        <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            {link.label}
                        </a>
                    )
                ))}
            </div>
        </article>
    );
};

export default Product;
