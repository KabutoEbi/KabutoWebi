import React from "react";

const Product = ({ Name, description, language, links = [] }) => {
    const languages = Array.isArray(language) ? language : language ? [language] : [];
    
    return (
        <article className="group bg-white rounded-2xl p-8 border border-black relative">
            {languages.length > 0 && (
                <div className="md:absolute md:top-4 md:left-4 flex flex-wrap gap-2 static mb-2 md:mb-0">
                    {languages.map((lang, index) => (
                        <div key={index} className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                            {lang}
                        </div>
                    ))}
                </div>
            )}
            <div className="mb-6 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 transition-colors duration-300">
                    {Name}
                </h2>
                <p className="text-black leading-relaxed text-base">
                    {description}
                </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
                {links.map((link, idx) => (
                    link.isInProgress ? (
                        <span
                            key={idx}
                            className="inline-flex items-center px-4 py-2 bg-black text-black rounded-lg font-medium cursor-default border border-gray-200"
                        >
                            {link.label}
                        </span>
                    ) : (
                        <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-green-300 text-black rounded-lg font-medium border border-green-300"
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
