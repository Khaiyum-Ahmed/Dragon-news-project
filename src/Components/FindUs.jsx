import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
const FindUs = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] font font-bold text-xl mb-6">Find Us On</h2>
            <div className=" join flex join-vertical *:bg-base-100 ">
                <button className="btn justify-start join-item"><FaFacebookF />Facebook</button>
                <button className="btn justify-start join-item"><FaTwitter />Twitter</button>
                <button className="btn justify-start join-item"><BsInstagram />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;