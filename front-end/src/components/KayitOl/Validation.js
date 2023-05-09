import { object, string, ref } from 'yup'
let validations = object({
    isim: string().required("Bu alan zorunludur"),
    kullaniciAdi: string().required("Bu alan zorunludur"),
    email: string().email("Lütfen e-posta adresinizi geçerli formatta giriniz").required("Bu alan zorunludur"),
    password: string().min(5, "Minimum karakter sayısı 5").required("Bu alan zorunludur"),
    passwordConfirmation: string().oneOf([ref('password')], "Lütfen aynı şifreyi giriniz")

})
export default validations;