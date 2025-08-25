import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/LayoutComponents/LeftNavbar";
import MainContent from "../Components/LayoutComponents/MainContent";
import RightNavbar from "../Components/LayoutComponents/RightNavbar";
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
            <main className="w-11/12 mx-auto pt-6 grid md:grid-cols-12 gap-5">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <MainContent></MainContent>
                </section>
                <aside className="right col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;