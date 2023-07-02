import { object, string, number } from 'yup';

let validations = object({
  urunAdi: string().required('Bu alan gereklidir'),
  urunDetay: string().required('Bu alan gereklidir'),
  urunOzellikler: string("String olmak zorunda").required('Bu alan gereklidir'),
  resimUrl: string().required('Bu alan gereklidir'),
  urunFiyat: number().typeError('Lütfen sayı giriniz').min(0, 'Fiyat 0 dan büyük olmalıdır').required('Bu alan gereklidir'),
  stok: number().typeError('Lütfen sayı giriniz').min(0, 'Stok adedi 0 dan büyük olmalıdır').required('Bu alan gereklidir'),
  kategori: string().required('Bu alan gereklidir'),
});

export default validations;
