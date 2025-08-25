import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2.5 items-center p-4 bg-base-300">
           <p className="bg-[#D72050] text-base-100 px-4 py-2">Latest</p>
           <Marquee pauseOnHover={true} speed={200} className="space-x-8 font-semibold">
            <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, repudiandae unde. Deleniti perspiciatis reiciendis at expedita labore. Eaque, exercitationem quo? Veritatis repellendus sed dolore quos.</Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;