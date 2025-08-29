import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/LayoutComponents/RightNavbar";
import { IoMdArrowRoundBack } from "react-icons/io";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold text-xl text-[#403F3F]">Dragon News</h2>

                    <div className="mt-8 card bg-base-100 shadow-sm">
                        <figure className="px-6 pt-6">
                            <img
                                src={news?.image_url}
                                alt="news"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] text-white"><IoMdArrowRoundBack /> All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;