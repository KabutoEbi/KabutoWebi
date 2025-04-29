import React from "react";

const Footer = () => {
    return (
        <div className="textcenter mt-4 bg-green-300 border-t-6 border-green-600 p-3">
            <div className="text-xl my-2">
                <ul className="flex justify-center space-x-4">
                    <li><a href="https://github.com/KabutoEbi" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <p>|</p>
                    <li><a href="https://qiita.com/KabutoEbi" target="_blank" rel="noopener noreferrer">Qiita</a></li>
                    <p>|</p>
                    <li><a href="https://atcoder.jp/users/KabutoEbi" target="_blank" rel="noopener noreferrer">AtCoder</a></li>
                    <p>|</p>
                    <li><a href="https://x.com/KabutoEbi_mp3" target="_blank" rel="noopener noreferrer">Twitter(旧X)</a></li>
                </ul>
            </div>
            <p>KabutoEbi + Web = KabutoWebi</p>
        </div>
    );
};

export default Footer;