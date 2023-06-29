import { createContext, useContext, useState, useEffect } from "react";
import { LinearProgress, Box } from '@mui/material';
import { benKimim } from '../api/KullaniciApi/api';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sepet, setSepet] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                if (loggedIn) {
                    const kullanici = await benKimim();
                    setUser(kullanici.data)
                }
                setToken(localStorage.getItem("token"));
                setLoggedIn(token ? true : false);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        })()
    }, [])
    useEffect(() => {
        console.log(sepet);
    }, [sepet])
    const SepeteEkle = (urun) => {
        setSepet([...sepet, urun]);
    }
    const SepettenSil = (urun) => {
        setSepet(sepet.filter((u) => u.urunId !== urun.urunId));
    }
    const Login = async (response) => {
        setToken(response.token);
        localStorage.setItem("token", response.token);
        const kullanici = await benKimim();
        setUser(kullanici.data);
        setLoggedIn(true);
    }
    const Logout = () => {
        setLoggedIn(false);
        localStorage.removeItem("token");
        setUser(null);
        window.location.href = "/";
    }

    const values = {
        loggedIn,
        token,
        Login,
        Logout,
        user,
        sepet,
        SepeteEkle,
        SepettenSil
    };
    if (loading) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuth
}