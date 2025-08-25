import { FaGoogle, FaGithub  } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="mb-8">
            <h2 className="text-[#403F3F] font font-bold text-xl mb-5">Login With</h2>
            <div className="*:w-full space-y-3">
                <button className="btn"><FaGoogle />Login With Google</button>
                <button className="btn"><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;