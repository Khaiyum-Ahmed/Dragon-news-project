import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-5">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-6"></main>
        </div>
    );
};

export default HomeLayouts;