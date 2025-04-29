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
            </div>
            <Articles />
            <Notifications />
            <Footer />
        </div>
    );
}

export default Home;