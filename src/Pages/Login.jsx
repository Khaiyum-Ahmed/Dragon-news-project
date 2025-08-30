import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { signInUsers, setUser } = useContext(AuthContext);
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();

    
    const handleLogIn = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log({ email, password });

        // users sign in
        signInUsers(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state: "/")
            })
            .catch((wrong) => {
                setError({...error, login:wrong.code})
            });
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-16">
                <div className="pb-12 border-b border-[#E7E7E7]">
                    <h2 className="text-center font-semibold text-4xl text-[#403F3F]  ">Login your account</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleLogIn}>
                        <fieldset className="fieldset gap-4">
                            <label className="label font-semibold text-xl text-[#403F3F]">Email address</label>
                            <input type="email"
                                name="email"
                                className="input w-full text-base bg-[#F3F3F3] border-none" placeholder="Enter your email address" />
                            <label className="label font-semibold text-xl text-[#403F3F]">Password</label>
                            <input type="password"
                                name="password"
                                className="input w-full text-base bg-[#F3F3F3] border-none" placeholder="Enter your password" />
                                {
                                    error.login && (<label className="label font-semibold text-base text-red-500">{error.login}</label>)
                                }
                            <div><a className="link link-hover font-medium text-base text-[#706F6F]">Forgot password?</a></div>
                            <button className="btn btn-neutral font-semibold text-xl bg-[#403F3F] mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="font-semibold text-base text-[#706F6F] mt-5 text-center">Don't Have An Account? <Link to="/auth/register" className="text-[#F75B5F]">Register</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;