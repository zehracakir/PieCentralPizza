import { object, string } from 'yup'
let validations = object({
    email: string().email("Lütfen e-posta adresinizi geçerli formatta giriniz").required("Bu alan zorunludur"),
    sifre: string().min(5, "Minimum karakter sayısı 5").required("Bu alan zorunludur")
})
export default validations;