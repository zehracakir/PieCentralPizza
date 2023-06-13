import axios from "axios";
const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer '+ localStorage.getItem("token")
        }
    };
    return config
}

const kayitOl = async (input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/kayitol`, input);
    return response;
}
const girisYap = async (input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/girisyap`, input);
    return response;
}
const benKimim = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/benkimim`, setAuth());
    return response;
}
export{
    kayitOl,
    girisYap,
    benKimim
}