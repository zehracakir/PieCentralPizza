const KullaniciSema = require('../models/KullaniciSema')

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

const kullaniciSil = async function (req, res) {
  const kullaniciId = req.params.kullaniciId;


  try {
    const kullanici = await KullaniciSema.findByIdAndRemove(kullaniciId);
    if (!kullanici) {
      return cevapOlustur(res, 404, { "durum": "kullanici bulunamadi" });
    }

    return cevapOlustur(res, 200, { "durum": "kullanici basariyla silindi" });
  } catch (error) {
    return cevapOlustur(res, 500, { "durum": "bir hata olustu" });
  }
}

//a dan z ye, z den a ya 
const kullaniciAdinaGoreKullaniciGetir = async (req, res) => {
  const isim = req.params.isim;

  try {
    let kullanicilar, durum;

    if (isim === "buyukten-kucuge-sirala") {
      durum = -1;
    } else if (isim === "kucukten-buyuge-sirala") {
      durum = 1;
    } else {
      return cevapOlustur(res, 400, { "hata": "Böyle bir sıralama seçeneği yok" });
    }

    kullanicilar = await KullaniciSema.find().collation({ locale: "en" }).sort({ isim: durum }).select("isim");

    if (kullanicilar.length > 0) {
      cevapOlustur(res, 200, kullanicilar);
    } else {
      cevapOlustur(res, 404, { "hata": "Duruma göre kullanıcı bulunamadı" });
    }
  } catch (error) {
    cevapOlustur(res, 500, error);
  }
};


const kayitOlmaTarihineGoreKullaniciGetir = async (req, res) => {
  const kayitTarihi = req.params.kayitTarihi;

  try {
    let kullanicilar, durum;

    if (kayitTarihi === "en-yeni") {
      durum = -1;
    } else if (kayitTarihi === "en-eski") {
      durum = 1;
    } else {
      return cevapOlustur(res, 400, { "hata": "Böyle bir tarih parametresi yok" });
    }

    kullanicilar = await KullaniciSema.find().sort({ kayitTarihi: durum }).select("kullaniciAdi kayitTarihi email adres telefonNo");

    if (kullanicilar.length > 0) {
      cevapOlustur(res, 200, kullanicilar);
    } else {
      cevapOlustur(res, 404, { "hata": "Duruma göre kullanıcı bulunamadı" });
    }
  } catch (error) {
    cevapOlustur(res, 500, error);
  }
};


module.exports = {
  tumKullanicilariGetir,
  kullaniciSil,
  kayitOlmaTarihineGoreKullaniciGetir,
  kullaniciAdinaGoreKullaniciGetir
}