import React, { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-green-400 p-4 border-b-6 border-green-600">
            <div className="flex items-center justify-between px-5">
                <h1 className="text-4xl font-bold text-left">KabutoWebi</h1>
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="メニュー"
                >
                    <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
                    <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
                    <span className="block w-7 h-1 bg-black rounded"></span>
                </button>
                
                <ul
                    className={`
                        flex items-center text-2xl
                        ${menuOpen ? "absolute top-16 right-2 bg-green-200 border-2 border-gray-400 rounded shadow-lg flex-col space-x-0 space-y-2 p-4 z-50" : "hidden"}
                        md:flex md:static md:bg-transparent md:rounded-none md:shadow-none md:flex-row md:space-x-5 md:space-y-0 md:p-0
                    `}
                >
                    <li className="nav-item-h w-full flex justify-center">
                        <a href="/" className="block w-full text-center">Home</a>
                    </li>
                    {menuOpen ? (
                        <div className="w-full h-0.5 bg-gray-400 rounded"></div>
                    ) : (
                        <li className="hidden md:block"><span>|</span></li>
                    )}
                    <li className="nav-item-h w-full flex justify-center">
                        <a href="/products" className="block w-full text-center">Products</a>
                    </li>
                    {menuOpen ? (
                        <div className="w-full h-px bg-gray-400 rounded"></div>
                    ) : (
                        <li className="hidden md:block"><span>|</span></li>
                    )}
                    <li className="nav-item-h w-full flex justify-center">
                        <a href="/about" className="block w-full text-center">About</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;