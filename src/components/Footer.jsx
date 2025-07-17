const Footer = () => {
    const socialLinks = [
        { name: "Github", url: "https://github.com/KabutoEbi" },
        { name: "Qiita", url: "https://qiita.com/KabutoEbi" },
        { name: "AtCoder", url: "https://atcoder.jp/users/KabutoEbi" },
        { name: "X", url: "https://x.com/KabutoEbi_mp3" }
    ];

    return (
        <>
            <div className="w-full h-1 bg-green-600" />
            <footer className="bg-green-500">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-4 py-3 text-black font-medium rounded-lg hover:bg-transparent transition-all duration-300"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <div className="hidden md:block absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></div>
                            </a>
                        ))}
                    </div>

                    <div className="w-full h-px bg-black bg-opacity-30 mb-6"></div>

                    <div className="text-center">
                        <p className="text-black text-lg font-medium mb-2 drop-shadow-sm">
                            KabutoEbi + Web = KabutoWebi
                        </p>
                        <p className="text-black text-sm opacity-80">
                            © 2025 KabutoEbi. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;