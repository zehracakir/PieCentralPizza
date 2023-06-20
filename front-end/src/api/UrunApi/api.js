import axios from "axios";
const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer '+ localStorage.getItem("token")
        }
    };
    return config
}
const kullaniciFavorileriGetir = async (userid) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/kullanici/${userid}/favoriler`, setAuth());
    return response;
}
const kullaniciFavoriSil = async (userid, urunid) => {
    const response = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/kullanici/${userid}/favoriler/${urunid}`, setAuth());
    return response;
}
export {
    kullaniciFavorileriGetir,
    kullaniciFavoriSil
}