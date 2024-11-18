import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

const Home = () => {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <div className="m-about">
                    <img src="./images/icon.png" className="m-icon" alt="icon" />
                    <h2>KabutoEbi</h2>
                    <p>KabutoEbiです。高専生です。<br />
                        主に競技プログラミングをしています。たまに、ものづくりもします。
                    </p>
                </div>
                <div className="letsgo">
                    <div className="to-about">
                        <h2><a href="/about"><u>About ⇒</u></a></h2>
                        <p>詳しい自己紹介</p>
                    </div>
                    <div className="to-works">
                        <h2><a href="/works"><u>Works ⇒</u></a></h2>
                        <p>過去に作ったもの<br />・取り組んだこと</p>
                    </div>
                </div>
                <div>
                    <p>
                        なぜKabutoWebiなのか？<br />
                        KabutoEbiのWebサイトだから。
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;