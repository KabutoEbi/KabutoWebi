import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

const Works = () => {
    return (
        <div className="App">
            <Header />
            <main className="w-main">
                <h1>Works</h1>
                <div className="prod-cont">
                    <div className="products">
                        <h2>--------　作品系　--------</h2>
                        <div>
                            <h3><u>2進数時計 ⇒</u></h3>
                            <p>現在時刻を2進数で表示する時計です。</p>
                        </div>
                        <div>
                            <h3><u>自動販売機 ⇒</u></h3>
                            <p>ゼロから自動販売機を作りました。</p>
                        </div>
                    </div>
                    <div className="contest">
                    <h2>-----　コンテスト系　-----</h2>
                        <div>
                            <h3><a href="https://dcon.ai/teams/#1st" target="_blank" rel="noopener noreferrer">
                                <u>DCON2025 ⇒</u>
                            </a></h3>
                            <p>チーム名「bogosort」です。<br />
                                1次審査が通り、現在2次審査に向けて製作中です。</p>
                        </div>
                        <div>
                            <h3><a href="https://protopedia.net/prototype/6398" target="_blank" rel="noopener noreferrer">
                                <u>ヒーローズ・リーグ2024 ⇒</u>
                            </a></h3>
                            <p>「ぷらなび」という、塗り絵×メダルゲーム×貯金箱の作品です。<br />
                                現在審査中です。</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Works;