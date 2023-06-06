import { object, string, ref } from 'yup'

let validations = object({
    eskiSifre: string().min(5, "Minimum 5 karakter giriniz").required("Bu alan zorunludur"),
    sifre: string().min(5, "Minimum 5 karakter giriniz").required("Bu alan zorunludur"),
    sifreOnayla: string().oneOf([ref('sifre')], "Lütfen aynı şifreyi giriniz").required("Bu alan zorunludur"),
})
export default validations;