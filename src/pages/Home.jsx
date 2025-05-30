import Header from "../components/Header";
import Articles from "../components/Articles";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="text-center">
            <Header />
            <div className="mt-4 text-xl p-4">
                <p>KabutoEbiのポートフォリオサイトです。</p>
                <p>作品とか色々載せていきます。</p>
                <img src="/kabutoebi.png" alt="kabutoebi" className="mx-auto my-10 w-50 rounded-full" />
                <a href="https://www.nies.go.jp/biodiversity/invasive/DB/detail/70400.html" target="_blank" rel="noopener noreferrer" className="hover:underline">カブトエビについて→</a>
            </div>
            <div className="flex justify-center gap-20 mt-4">
                <div className="flex flex-col items-center">
                    <p className="font-bold text-2xl p-1 border-b-4 border-green-300 inline-block mb-2">Products</p>
                    <div className="text-xl">
                        <p><a href="/products" className="hover:underline">過去の製作物→</a></p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-bold text-2xl p-1 border-b-4 border-green-300 inline-block mb-2">About</p>
                    <div className="text-xl">
                        <p><a href="/about" className="hover:underline">詳しい自己紹介→</a></p>
                    </div>
                </div>
            </div>
            <Articles />
            <Notifications />
            <Footer />
        </div>
    );
}

export default Home;