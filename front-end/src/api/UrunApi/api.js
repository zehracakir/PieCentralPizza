import axios from "axios";
const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
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


const kategoriyeGoreUrunGetir = async (kategori) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/kategoriler/${kategori}`);
    return data;
}
const urunDetayGetir = async (urunid) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/urunler/${urunid}`);
    return data;
}

const yeniUrunEkle = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/admin/urunler`);
    return data;
}

const adminTumUrunleriGetir = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/urunler`);
    return data;
}

export {
    kullaniciFavorileriGetir,
    kullaniciFavoriSil,
    kategoriyeGoreUrunGetir,
    urunDetayGetir,
    yeniUrunEkle,
    adminTumUrunleriGetir
}

