import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Products = () => {
    return (
        <div className="text-center bg-green-100">
            <Header />
            <div className="mt-4 my-4 text-xl p-4">
                <p>作った作品とかを紹介します。</p>
            </div>

            <Product
                Name="KabutoWebi"
                description="あなたが見ているこのサイト。"
            />
            <div className="mb-4 text-xl">
                <a href="https://github.com/KabutoEbi/KabutoWebi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    GitHub→
                </a>
            </div>

            <Product
                Name="遠回しに伝える"
                description="LINEスタンプです。理解するのに時間がかかります。"
            />
            <div className="mb-4 text-xl">
                <a href="https://line.me/S/sticker/30147548"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    LINE Store→
                </a>
            </div>

            <Product
                Name="賽の河原の石積み"
                description="自作ゲームです。たくさん石を壊しましょう。"
            />
            <div className="mb-4 text-xl">
                <a href="https://github.com/KabutoEbi/StackStones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    GitHub→
                </a>
            </div>

            <Product
                Name="veryfunny"
                description="とてもおもしろい"
            />
            <div className="mb-4 text-xl">
                <a href="https://github.com/KabutoEbi/veryfunny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    GitHub→
                </a>
            </div>

            <Product
                Name="Body Balancer"
                description="座布団に座るだけで体の姿勢状況を測定するデバイスです。"
            />
            <div className="mb-4 text-xl">
                <a href="https://drive.google.com/file/d/1qRbASGgWBVy6I860xdmvNxihezG-eAx7/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    資料→
                </a>
            </div>

            <Product
                Name="ぷらなび.pig -貯金箱×ぬりえによる目標達成ツール-"
                description="貯金箱とぬりえを組み合わせた目標達成ツールです。"
            />
            <div className="mb-4 text-xl">
                <a href="https://protopedia.net/prototype/6398"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    サイト→
                </a>
            </div>

            <Product
                Name="Arduinoで2進数時計"
                description="Arduinoで2進数時計を作りました。"
            />
            <div className="mb-2 text-xl">
                <a href="https://qiita.com/KabutoEbi/items/16753cae7f433e0ec461"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Qiita→
                </a>
                <br />
                <a href="https://github.com/KabutoEbi/BinaryClock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    GitHub→
                </a>
            </div>

            <Product
                Name="自動販売機"
                description="簡易的な自動販売機です。"
            />
            <div className="mb-4 text-xl">
                <a href="https://youtube.com/shorts/h0v0p4pKwqg?feature=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    動画→
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default Products;