import { object, string } from 'yup'
let validations = object ({
    sehir:string().required("Bu alan zorunludur"),
    ilce:string().required("Bu alan zorunludur"),
    mahalle:string().required("Bu alan zorunludur"),
    sokak:string().required("Bu alan zorunludur"),
    adresAdi:string().required("Bu alan zorunludur"),
})
export default validations;