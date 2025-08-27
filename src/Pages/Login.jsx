import { Link } from "react-router-dom";

const Login = () => {
    return (


        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-16">
                <div className="pb-12 border-b border-[#E7E7E7]">
                    <h2 className="text-center font-semibold text-4xl text-[#403F3F]  ">Login your account</h2>
                </div>
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset gap-4">
                            <label className="label font-semibold text-xl text-[#403F3F]">Email address</label>
                            <input type="email" className="input w-full text-base text-[#9F9F9F] bg-[#F3F3F3] border-none" placeholder="Enter your email address" />
                            <label className="label font-semibold text-xl text-[#403F3F]">Password</label>
                            <input type="password" className="input w-full text-base text-[#9F9F9F] bg-[#F3F3F3] border-none" placeholder="Enter your password" />
                            <div><a className="link link-hover font-medium text-base text-[#706F6F]">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="font-semibold text-base text-[#706F6F] mt-5 text-center">Don't Have An Account? <Link to="/auth/register" className="text-[#F75B5F]">Register</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;