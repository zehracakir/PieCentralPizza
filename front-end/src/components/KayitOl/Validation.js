import { object, string, ref } from 'yup'
let validations = object({
    isim: string().required("Bu alan zorunludur"),
    kullaniciAdi: string().required("Bu alan zorunludur"),
    email: string().email("Lütfen e-posta adresinizi geçerli formatta giriniz").required("Bu alan zorunludur"),
    sifre: string().min(5, "Minimum karakter sayısı 5").required("Bu alan zorunludur"),
    sifreTekrar: string().oneOf([ref('sifre')], "Lütfen aynı şifreyi giriniz").required("Bu alan zorunludur")

})
export default validations;