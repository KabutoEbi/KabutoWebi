import React from "react";

const Header = () => {
    return (
        <header className="text-center bg-green-300 margin-y-4 p-4 border-b-6 border-green-600">
            <h1 className="text-5xl font-bold">KabutoWebi</h1>
            <ul className="flex justify-center space-x-5 text-2xl mt-4">
                <li><a href="/">Home</a></li>
                <p>|</p>
                <li><a href="/products">Products</a></li>
                <p>|</p>
                <li><a href="/about">About</a></li>
            </ul>
        </header>
    );
};

export default Header;