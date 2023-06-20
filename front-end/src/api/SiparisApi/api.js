import axios from "axios";
const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer '+ localStorage.getItem("token")
        }
    };
    return config
}
const kullaniciSiparisleriGetir = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/kullanici/${id}/siparisler`, setAuth());
    return response;
}
const kullaniciSiparisSil = async (id, siparisId)  => {
    const response = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/kullanici/${id}/siparisler/${siparisId}`, setAuth());
    return response;
}
export{
    kullaniciSiparisleriGetir,
    kullaniciSiparisSil
}