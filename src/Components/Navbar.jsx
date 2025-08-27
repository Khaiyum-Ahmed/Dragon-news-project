import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav space-x-6 text-[#706F6F] text-[18px]">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login">
               <div className="flex gap-2.5 items-center">
                 <img src={userIcon} alt="" />
                <Link to="/auth/login" className="text-white font-semibold text-xl py-2 px-6 bg-[#403F3F]">Login</Link>
               </div>
            </div>
        </div>
    );
};

export default Navbar;