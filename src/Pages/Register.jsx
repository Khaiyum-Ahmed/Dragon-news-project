import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { signUpUsers, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if(name.length < 5){
            setError({...error, name:"must be more the 5 character long"});
            return;
        }
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        console.log({ name, email, photo, password });

        // create new users
        signUpUsers(email, password)
            .then(result => {
                const user = result.user;
                setUser(user.email);
                updateUserProfile({displayName: name, photoURL: photo})
                .then(()=>{
                    navigate("/");
                })
                .catch(err=>{
                    console.log(err)
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });

    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-16">
                <div className="pb-12 border-b border-[#E7E7E7]">
                    <h2 className="text-center font-semibold text-4xl text-[#403F3F]  ">Register your account</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset gap-4">
                            <label className="label font-semibold text-xl text-[#403F3F]">Your Name</label>
                            <input type="text" className="input w-full text-base bg-[#F3F3F3] border-none" placeholder="Enter your name"
                            name="name" />
                            {
                                error.name && (<label className="label font-medium text-base text-red-600">{error.name}</label>)
                            }

                            <label className="label font-semibold text-xl text-[#403F3F]">Photo URL</label>
                            <input type="text" className="input w-full text-base bg-[#F3F3F3] border-none" placeholder="Enter your photo URL"
                                name="photo" />

                            <label className="label font-semibold text-xl text-[#403F3F]">Email address</label>
                            <input type="email" className="input w-full text-base bg-[#F3F3F3] border-none" placeholder="Enter your email address"
                                name="email"
                                required />

                            <label className="label font-semibold text-xl text-[#403F3F]">Password</label>
                            <input type="password" className="input w-full text-base bg-[#F3F3F3] border-none" placeholder="Enter your password"
                                name="password" />

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