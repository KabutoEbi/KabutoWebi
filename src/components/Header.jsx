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
        <header className="bg-gradient-to-r from-green-500 to-green-600 p-4">
            <div className="container mx-auto flex items-center justify-between px-3">
                <div className="flex items-center">
                    <img
                        src="/header-icon.png"
                        alt="Header Icon"
                        className="w-12 h-12 object-contain select-none mr-3 rounded-full filter invert"
                        draggable="false"
                    />
                    <h1 className="text-4xl font-bold text-white select-none tracking-wide">
                        KabutoWebi
                    </h1>
                </div>
                
                <button
                    className="md:hidden flex flex-col justify-center items-center w-12 h-12"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="メニュー"
                >
                    <div className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></div>
                    <div className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : 'mb-1'}`}></div>
                    <div className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </button>
                
                <nav
                    className={`
                        ${menuOpen 
                            ? "absolute top-20 right-4 bg-green-500 rounded-xl p-6 z-50 min-w-48 flex flex-col space-y-2" 
                            : "hidden"
                        }
                        md:flex md:static md:bg-transparent md:flex-row md:space-x-8 md:space-y-0 md:p-0 md:min-w-0
                    `}
                >
                    <a 
                        href="/" 
                        className="group relative text-white font-medium py-2 px-4 block text-center transition-all duration-300"
                    >
                        <span className="relative z-10">Home</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                    </a>
                    
                    <a 
                        href="/products" 
                        className="group relative text-white font-medium py-2 px-4 block text-center transition-all duration-300"
                    >
                        <span className="relative z-10">Products</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                    </a>
                    
                    <a 
                        href="/about" 
                        className="group relative text-white font-medium py-2 px-4 block text-center transition-all duration-300"
                    >
                        <span className="relative z-10">About</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;