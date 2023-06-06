const KullaniciSema=require('../models/KullaniciSema')

const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}



const buyuktenKucugeSirala = async function (req, res) {
    try {
    const kullaniciListesi = await KullaniciSema.find();
    const siralanmisKullanicilar = kullaniciListesi.map(kullanici => kullanici.toObject());
    siralanmisKullanicilar.sort((a, b) => b.isim.toLowerCase().localeCompare(a.isim.toLowerCase()));
    cevapOlustur(res, 200, siralanmisKullanicilar);
    } catch (err) {
    cevapOlustur(res, 500, { error: 'Bir hata oluştu' });
    }
    };

    const kucuktenBuyugeSirala = async function (req, res) {
        try {
          const kullaniciListesi = await KullaniciSema.find();
          const siralanmisKullanicilar = kullaniciListesi.map(kullanici => kullanici.toObject());
          siralanmisKullanicilar.sort((a, b) => a.isim.toLowerCase().localeCompare(b.isim.toLowerCase()));
          cevapOlustur(res, 200, siralanmisKullanicilar);
        } catch (err) {
          cevapOlustur(res, 500, { error: 'Bir hata oluştu' });
        }
      };
      

module.exports = {
  buyuktenKucugeSirala,
  kucuktenBuyugeSirala
 }