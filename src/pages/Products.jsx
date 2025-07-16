import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Products = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            <Header />
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mx-6">Products</h1>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        これまでに制作したアプリケーション、デバイス、ゲームなどの作品をご紹介します
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
                    <Product
                        Name="KabutoWebi"
                        description="あなたが見ているこのサイト．"
                        language="React"
                        links={[
                            { label: "GitHub", url: "https://github.com/KabutoEbi/KabutoWebi" },
                        ]}
                    />

                    <Product
                        Name="calendar_app"
                        description="個人的に欲しい機能を集めたカレンダーアプリです．"
                        language="Flutter"
                        links={[
                            { label: "GitHub", url: "https://github.com/KabutoEbi/calendar_app" },
                        ]}
                    />

                    <Product
                        Name="MNCT Wiki"
                        description="舞鶴高専の情報をまとめたWikiサイトです．"
                        language={["React", "Firebase"]}
                        links={[
                            { label: "サイト", url: "https://mnct-wiki.vercel.app/" },
                        ]}
                    />

                    <Product
                        Name="miniSNS"
                        description="簡易的なSNSです．某Xを真似してみました．"
                        language={["Flutter", "Firebase"]}
                        links={[
                            { label: "GitHub", url: "https://github.com/KabutoEbi/miniSNS"},
                        ]}
                    />

                    <Product
                        Name="遠回しに伝える"
                        description="LINEスタンプです．遠回しな表現を集めました．"
                        language="LINEスタンプ"
                        links={[
                            { label: "LINE Store", url: "https://line.me/S/sticker/30147548" },
                        ]}
                    />

                    <Product
                        Name="賽の河原の石積み"
                        description="自作ゲームです．たくさん石を壊しましょう．"
                        language="Unity"
                        links={[
                            { label: "GitHub", url: "https://github.com/KabutoEbi/StackStones" },
                        ]}
                    />

                    <Product
                        Name="veryfunny"
                        description="とてもおもしろい．"
                        language="Markdown"
                        links={[
                            { label: "GitHub", url: "https://github.com/KabutoEbi/veryfunny" },
                        ]}
                    />

                    <Product
                        Name="Body Balancer"
                        description="座布団に座るだけで体の姿勢状況を測定するデバイスです．"
                        language={["Python", "RaspberryPiPico", "JetsonNano"]}
                        links={[
                            { label: "資料", url: "https://drive.google.com/file/d/1qRbASGgWBVy6I860xdmvNxihezG-eAx7/view?usp=sharing" },
                        ]}
                    />

                    <Product
                        Name="ぷらなび.pig"
                        description="貯金箱とぬりえを組み合わせた目標達成ツールです．"
                        language="Arduino"
                        links={[
                            { label: "コンテストサイト", url: "https://protopedia.net/prototype/6398" },
                        ]}
                    />

                    <Product
                        Name="Arduinoで2進数時計"
                        description="Arduinoで2進数時計を作りました．"
                        language="Arduino"
                        links={[
                            { label: "Qiita", url: "https://qiita.com/KabutoEbi/items/16753cae7f433e0ec461" },
                            { label: "GitHub", url: "https://github.com/KabutoEbi/BinaryClock" },
                        ]}
                    />

                    <Product
                        Name="自動販売機"
                        description="簡易的な自動販売機です．"
                        language="Arduino"
                        links={[
                            { label: "動画", url: "https://youtube.com/shorts/h0v0p4pKwqg?feature=share" },
                        ]}
                    />
                </div>

                <div className="text-center max-w-4xl mx-auto">
                    <p className="text-xl md:text-2xl text-gray-700 font-medium italic leading-relaxed">
                        私は多数の素晴らしい作品を製作したが、ここに記すには余白が小さすぎる。
                    </p>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Products;