import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

const About = () => {
    return (
        <div className="App">
            <Header />
            <main className="a-main">
                <div className="mm-about">
                    <h1>About</h1>
                    <img src="./images/icon.png" className="m-icon" alt="icon" />
                    <h2>KabutoEbi</h2>
                    <p>各種リンクはページ下部左側にあります。</p>
                </div>
                <div className="m-about">
                    <div className="syozoku">
                        <h3>ー　所属　ー</h3>
                        <p>
                            舞鶴工業高等専門学校　電気情報工学科2年<br />
                            プログラマーズコミュニティ部
                        </p>
                    </div>
                    <div className="keireki">
                        <h3>ー　経歴　ー</h3>
                        <p>
                            2007年09月12日生まれ<br />
                            2023年4月　舞鶴工業高等専門学校入学<br />
                            2024年現在　舞鶴工業高等専門学校在学中
                        </p>
                    </div>
                    <div className="taikai">
                        <h3>ー　大会出場歴　ー</h3>
                        <p>
                            パソコン甲子園2023 予選230位<br />
                            パソコン甲子園2024 予選   位
                        </p>
                    </div>
                    <div className="gijutu">
                        <h3>ー　技術スタック　ー</h3>
                        <p>
                            C++：競技プログラミングの範囲内<br />
                            React：基本的なことができる<br />
                            HTML・CSS：基本的なことができる<br />
                            Unity/C#：ちょっとだけできる<br />
                            Arduino：ちょっとだけできる<br />
                            レーザー加工機：がっつり使える
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;