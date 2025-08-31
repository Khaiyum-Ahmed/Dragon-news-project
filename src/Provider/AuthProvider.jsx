import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Pages/Firebase/Firebase.config";
  // eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    };

    const gitHubSignIn = () =>{
        return signInWithPopup(auth, gitHubProvider)
    }

    const signUpUsers = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signInUsers = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }

 

    const authInfo = {
        user,
        setUser,
        signUpUsers,
        signInUsers,
        logOut,
        updateUserProfile,
        googleSignIn,
        gitHubSignIn,
        loading
    };
       useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;