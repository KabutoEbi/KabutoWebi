import Header from "../components/Header";
import Articles from "../components/Articles";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="text-center bg-green-100">
            <Header />
            <div className="mt-4 text-xl p-4">
                <p>KabutoEbiのポートフォリオサイトです。</p>
                <p>作品とか色々載せていきます。</p>
                <img src="/kabutoebi.png" alt="kabutoebi" className="mx-auto my-10 w-50 rounded-full" />
                <a href="https://www.nies.go.jp/biodiversity/invasive/DB/detail/70400.html" target="_blank" rel="noopener noreferrer" className="hover:underline">カブトエビについて→</a>
            </div>
            <div className="text-center mt-4">
                <p className="font-bold text-2xl bg-green-300 border-t-6 border-green-400 p-4">Products</p>
                <div className="text-xl p-4">
                    <p><a href="/products" className="hover:underline">過去の製作物→</a></p>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="font-bold text-2xl bg-green-300 border-t-6 border-green-400 p-4">About</p>
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