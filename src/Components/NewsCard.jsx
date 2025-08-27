import { Link } from "react-router-dom";
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        _id,
        title,
        author,
        thumbnail_url,
        rating,
        total_view,
        details,
    } = news;

    return (
        <div className="card shadow-md border border-[#E7E7E7] rounded-md mb-7 overflow-hidden">
            {/* Header */}
            <div className="flex bg-[#F3F3F3] items-center justify-between p-4 mb-3">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold">{author?.name}</h3>
                        <p className="text-sm text-gray-500">
                            {author?.published_date?.split(" ")[0]}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="px-4 font-bold text-lg">{title}</h2>

            {/* Thumbnail */}
            <figure className="px-4 py-3">
                <img
                    src={thumbnail_url}
                    alt="news"
                    className="w-full h-64 lg:h-96 object-cover rounded-lg"
                />
            </figure>

            {/* Details */}
            <div className="px-4 pb-4">
                <p className="text-sm text-gray-700">
                    {details.length > 200 ? (
                        <>
                            {details.slice(0, 200)}...{" "}
                            <Link to={`/news/${_id}`} className="text-orange-500 font-medium">
                                Read More
                            </Link>
                        </>
                    ) : (
                        details
                    )}
                </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t border-[#E7E7E7] px-4 py-3 text-sm">
                <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-2 text-gray-700 font-medium">
                        {rating?.number}
                    </span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;


















// const NewsCard = ({news}) => {

//     console.log(news)

//     return (
//         <div>
//             <h1>dfgdfsg</h1>
//         </div>
//     );
// };

// export default NewsCard;