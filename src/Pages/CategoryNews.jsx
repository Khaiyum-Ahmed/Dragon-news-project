import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    return (
        <div>
            <h2 className="font-semibold text-xl text-[#403F3F] mb-5">Dragon News Home</h2>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;