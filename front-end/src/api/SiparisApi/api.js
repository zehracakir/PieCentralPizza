import axios from "axios";
const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        }
    };
    return config
}
const kullaniciSiparisleriGetir = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/kullanici/${id}/siparisler`, setAuth());
    return response;
}
const kullaniciSiparisSil = async (id, siparisId) => {
    const response = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/kullanici/${id}/siparisler/${siparisId}`, setAuth());
    return response;
}

const kullaniciSiparisEkle = async (id, urunId, input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/kullanici/${id}/siparisler/${urunId}`, input, setAuth());
    return response;
}

const adminTumSiparisleriGetir = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/admin/siparisler`, setAuth());
    return response;
}

const adminDurumaGoreSiparisGetir = async (siparisDurum) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/admin/siparisler/${siparisDurum}`, setAuth());
    return response;
}
const adminTariheGoreSiparisGetir = async (siparisTarihi) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/admin/${siparisTarihi}`, setAuth());
    return response;
}


const adminSiparisDurumuGuncelle = async (userid, siparisid, siparisDurum) => {
    const response = await axios.put(`${process.env.REACT_APP_BASE_ENDPOINT}/admin/${userid}/siparisler/${siparisid}`, siparisDurum, setAuth());
    return response;
}

export {
    kullaniciSiparisSil,
    adminTumSiparisleriGetir,
    adminDurumaGoreSiparisGetir,
    adminTariheGoreSiparisGetir,
    adminSiparisDurumuGuncelle,
    kullaniciSiparisleriGetir,
    kullaniciSiparisEkle

}