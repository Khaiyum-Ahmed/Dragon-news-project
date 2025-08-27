import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-16">
                <div className="pb-12 border-b border-[#E7E7E7]">
                    <h2 className="text-center font-semibold text-4xl text-[#403F3F]  ">Register your account</h2>
                </div>
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset gap-4">
                            <label className="label font-semibold text-xl text-[#403F3F]">Your Name</label>
                            <input type="text" className="input w-full text-base text-[#9F9F9F] bg-[#F3F3F3] border-none" placeholder="Enter your name" />

                            <label className="label font-semibold text-xl text-[#403F3F]">Photo URL</label>
                            <input type="text" className="input w-full text-base text-[#9F9F9F] bg-[#F3F3F3] border-none" placeholder="Enter your photo URL" />

                            <label className="label font-semibold text-xl text-[#403F3F]">Email address</label>
                            <input type="email" className="input w-full text-base text-[#9F9F9F] bg-[#F3F3F3] border-none" placeholder="Enter your email address" />

                            <label className="label font-semibold text-xl text-[#403F3F]">Password</label>
                            <input type="password" className="input w-full text-base text-[#9F9F9F] bg-[#F3F3F3] border-none" placeholder="Enter your password" />

                            <label className="label font-semibold text-base text-[#706F6F]">
                                <input type="checkbox" className="checkbox" />
                                Accept Term & Conditions
                            </label>


                            <button className="btn btn-neutral font-semibold text-xl bg-[#403F3F] mt-4">Register</button>
                        </fieldset>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Register;