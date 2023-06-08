import { createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const values = {};
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuth
}