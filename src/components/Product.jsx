import React from "react";

const Product = ({ Name, description, links = [] }) => (
    <div className="bg-green-200 rounded-lg shadow-md p-6 mb-6 w-full md:w-[48%]">
        <h2 className="text-2xl font-bold mb-2">{Name}</h2>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-4 justify-center">
            {links.map((link, idx) => (
                <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-lg"
                >
                    {link.label}
                </a>
            ))}
        </div>
    </div>
);

export default Product;
