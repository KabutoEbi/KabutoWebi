import React from "react";

const Product = ({ Name, description}) => {
    return (
        <div>
            <p className="font-bold text-2xl bg-green-300 border-t-3 border-green-600 p-3 ">
                {Name}
            </p>
            <p className="text-xl p-2">
                {description}
            </p>
        </div>
    );
};

export default Product;
