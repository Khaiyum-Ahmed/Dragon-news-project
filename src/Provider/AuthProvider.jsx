import { createContext, useState } from "react";
  // eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        name: 'arif', 
        email: "arif420@gmail.com"
    });

    const authInfo = {
        user,
        setUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;