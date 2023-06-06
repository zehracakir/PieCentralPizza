import { object, string, ref } from 'yup'
const telefonNoRegex = /^05\d{2}\d{3}\d{4}$/;

let validations = object({
    kullaniciAdi: string().required("Bu alan gereklidir"),
    email: string().email("Lütfen e-posta formatında giriniz").required("Bu alan zorunludur"),
    telefonNo: string().matches(telefonNoRegex, '(05**5**3*3*) formatında giriniz').required("Bu alan zorunludur"),
})
export default validations;