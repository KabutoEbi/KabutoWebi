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
            <div className="text-center mt-4">
                <p className="font-bold text-2xl p-1 border-b-4 border-green-300 inline-block">Products</p>
                <div className="text-xl p-4">
                    <p><a href="/products" className="hover:underline">過去の製作物→</a></p>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="font-bold text-2xl p-1 border-b-4 border-green-300 inline-block">About</p>
                <div className="text-xl p-4">
                    <p><a href="/about" className="hover:underline">詳しい自己紹介→</a></p>
                </div>
            </div>
            <Articles />
            <Notifications />
            <Footer />
        </div>
    );
}

export default Home;