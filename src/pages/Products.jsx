import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Products = () => {
    return (
        <div className="text-center">
            <Header />
            <div className="mt-4 my-4 text-xl p-4">
                <p>作った作品とかを紹介します。</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto px-6">
                <Product
                    Name="KabutoWebi"
                    description="あなたが見ているこのサイト。"
                    links={[
                        { label: "GitHub→", url: "https://github.com/KabutoEbi/KabutoWebi" },
                    ]}
                ></Product>

                <Product
                    Name="遠回しに伝える"
                    description="LINEスタンプです。理解するのに時間がかかります。"
                    links={[
                        { label: "LINE Store→", url: "https://line.me/S/sticker/30147548" },
                    ]}
                ></Product>

                <Product
                    Name="賽の河原の石積み"
                    description="自作ゲームです。たくさん石を壊しましょう。"
                    links={[
                        { label: "GitHub→", url: "https://github.com/KabutoEbi/StackStones" },
                    ]}
                ></Product>

                <Product
                    Name="veryfunny"
                    description="とてもおもしろい"
                    links={[
                        { label: "GitHub→", url: "https://github.com/KabutoEbi/veryfunny" },
                    ]}
                ></Product>

                <Product
                    Name="Body Balancer"
                    description="座布団に座るだけで体の姿勢状況を測定するデバイスです。"
                    links={[
                        { label: "資料→", url: "https://drive.google.com/file/d/1qRbASGgWBVy6I860xdmvNxihezG-eAx7/view?usp=sharing" },
                    ]}
                ></Product>

                <Product
                    Name="ぷらなび.pig"
                    description="貯金箱とぬりえを組み合わせた目標達成ツールです。"
                    links={[
                        { label: "コンテストサイト→", url: "https://protopedia.net/prototype/6398" },
                    ]}
                ></Product>

                <Product
                    Name="Arduinoで2進数時計"
                    description="Arduinoで2進数時計を作りました。"
                    links={[
                        { label: "Qiita→", url: "https://qiita.com/KabutoEbi/items/16753cae7f433e0ec461" },
                        { label: "GitHub→", url: "https://github.com/KabutoEbi/BinaryClock" },
                    ]}
                ></Product>

                <Product
                    Name="自動販売機"
                    description="簡易的な自動販売機です。"
                    links={[
                        { label: "動画→", url: "https://youtube.com/shorts/h0v0p4pKwqg?feature=share" },
                    ]}
                ></Product>
            </div>
            <div className="text-xl p-4">
                <p>私は多数の素晴らしい作品を製作したが、ここに記すには余白が狭すぎる。</p>
            </div>

            <Footer />
        </div>
    );
};

export default Products;