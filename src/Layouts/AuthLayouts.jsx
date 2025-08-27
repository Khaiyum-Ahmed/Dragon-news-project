import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayouts = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <header className="w-11/12 mx-auto py-5">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;