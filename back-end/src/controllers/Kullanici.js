const KullaniciSema=require('../models/KullaniciSema')

const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const tumKullanicilariGetir = async function (req, res) {
    try {
    const kullaniciListesi = await KullaniciSema.find().select("kullaniciAdi kayitTarihi email adres telefonNo");//adres array, duzenleme yapilabilir
    cevapOlustur(res, 200, kullaniciListesi);
    } catch (err) {
    cevapOlustur(res, 500, { error: 'Bir hata oluştu' });
    }
    };

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
      

      
      const enYeniKayittanSirala = async function (req, res) {
        try {
          const kullaniciListesi = await KullaniciSema.find().sort({ kayitTarihi: -1 });
          const siralanmisKullanicilar = kullaniciListesi.map(kullanici => kullanici.toObject());
          cevapOlustur(res, 200, siralanmisKullanicilar);
        } catch (err) {
          cevapOlustur(res, 500, { error: 'Bir hata oluştu' });
        }
      };


      const enEskiKayittanSirala = async function (req, res) {
        try {
          const kullaniciListesi = await KullaniciSema.find().sort({ kayitTarihi: 1 });
          const siralanmisKullanicilar = kullaniciListesi.map(kullanici => kullanici.toObject());
          cevapOlustur(res, 200, siralanmisKullanicilar);
        } catch (err) {
          cevapOlustur(res, 500, { error: 'Bir hata oluştu' });
        }
      };
      

module.exports = {
    tumKullanicilariGetir,
  buyuktenKucugeSirala,
  kucuktenBuyugeSirala,
  enYeniKayittanSirala,
  enEskiKayittanSirala
 }