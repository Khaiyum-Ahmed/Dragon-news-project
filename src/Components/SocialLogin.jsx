import { useContext } from "react";
import { FaGoogle, FaGithub  } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn,gitHubSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
        .catch(err =>{
            console.log(err.code)
        })
    };

    const handleGitHubSignIn = () =>{
        gitHubSignIn()
        .then(result =>{
            console.log(result.user)
        })
          .catch(err =>{
            console.log(err.code)
        })

        alert('githun sign in')
    }
    return (
        <div className="mb-8">
            <h2 className="text-[#403F3F] font font-bold text-xl mb-5">Login With</h2>
            <div className="*:w-full space-y-3">
                <button onClick={handleGoogleSignIn} className="btn"><FaGoogle />Login With Google</button>
                <button onClick={handleGitHubSignIn} className="btn"><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;