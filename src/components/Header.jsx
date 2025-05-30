import React, { useState, useEffect } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 768px)");
        const handler = () => {
            if (media.matches) setMenuOpen(false);
        };
        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
    }, []);

    return (
        <header className="bg-green-400 p-4 border-b-6 border-green-600">
            <div className="flex items-center justify-between px-3 items-center">
                <div className="flex items-center ml-0 pl-0">
                    <img
                        src="/header-icon.png"
                        alt="Header Icon"
                        className="w-10 object-contain select-none mr-1"
                        draggable="false"
                    />
                    <h1 className="text-4xl font-bold text-left select-none">KabutoWebi</h1>
                </div>
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer relative overflow-hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="メニュー"
                >
                    {menuOpen && (
                        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="w-10 h-10 bg-green-200 opacity-60 rounded-full animate-scale-in"></span>
                        </span>
                    )}
                    <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
                    <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
                    <span className="block w-7 h-1 bg-black rounded"></span>
                </button>
                
                <ul
                    className={`
                        flex items-center text-2xl
                        ${menuOpen ? "absolute top-16 right-2 bg-green-200 border-2 border-gray-400 rounded shadow-lg flex-col space-x-0 space-y-2 p-4 z-50" : "hidden"}
                        md:flex md:static md:bg-transparent md:border-0 md:rounded-none md:shadow-none md:flex-row md:space-x-5 md:space-y-0 md:p-0
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