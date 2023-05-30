const KullaniciSema = require("../models/KullaniciSema");

const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}
const kayitOl = async function (req, res) {
    const isim = req.body.isim;
    const kullaniciAdi = req.body.kullaniciAdi;
    const email = req.body.email;
    if (!isim || !kullaniciAdi || !email) {
        cevapOlustur(res, 400, { "hata": "Bütün alanlar gereklidir" })
        return;
    }
    try {
        const kullanici = await KullaniciSema.create({
            isim: isim,
            kullaniciAdi: kullaniciAdi,
            email: email
        });
        cevapOlustur(res, 201, kullanici);
    } catch (error) {
        cevapOlustur(res, 400, error);
    }
}

const girisYap = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" })
}

const kullaniciGetir = async function (req, res) {
    const userid = req.params.userid;
    try {
        const kullanici = await KullaniciSema.findById(userid)
            .select("-kayitTarihi -otorite");
        if (kullanici) {
            cevapOlustur(res, 200, kullanici)
        } else {
            cevapOlustur(res, 404, { "hata": "kullanici bulunamadi" })
        }
    } catch (error) {
        cevapOlustur(res, 404, error)
    }
}

const kullaniciGuncelle = async function (req, res) {
    const userid = req.params.userid;
    const kullaniciAdi = req.body.kullaniciAdi;
    const email = req.body.email;
    const telefonNo = req.body.telefonNo;
    // const sifre = req.body.sifre
    if (!userid || !kullaniciAdi || !email || !telefonNo) {
        cevapOlustur(res, 400, { "durum": "butun alanlari doldur" });
        return;
    }
    else {
        try {
            const kullanici = await KullaniciSema.findById(userid).select("kullaniciAdi email telefonNo");
            kullanici.kullaniciAdi = kullaniciAdi;
            kullanici.email = email;
            kullanici.telefonNo = telefonNo;
            try {
                const save = await kullanici.save();
                cevapOlustur(res, 400, save);
            } catch (error) {
                cevapOlustur(res, 400, error);
            }

        } catch (error) {
            cevapOlustur(res, 400, error)
        }
    }


}

const kullaniciAdresleriGetir = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" })
}
const kullaniciAdresEkle = async function (req, res) {
    //adresAdi,mahalle,sokak,ilce,sehir
    const userid = req.params.userid;

    const adresAdi = req.body.adresAdi;
    const mahalle = req.body.mahalle;
    const sokak = req.body.sokak;
    const ilce = req.body.ilce;
    const sehir = req.body.sehir;

    const adres = [adresAdi,mahalle,sokak,ilce,sehir].join(", ");
    try {
        const kullaniciAdres = await KullaniciSema.findById(userid).select("adres");
        if(kullaniciAdres){
            kullaniciAdres.adres.push(adres);
            try {
                const icerik = await kullaniciAdres.save();
                cevapOlustur(res,200,icerik);
            } catch (error) {
                cevapOlustur(res, 400,error);
            }
        }else{
            cevapOlustur(res,404,{"durum":"id ile eslesen eleman bulunamadi"})
        }
    } catch (error) {
        cevapOlustur(res, 200,error);
    }
}
const kullaniciAdresGuncelle = function (req, res) {



    
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciAdresSil = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}

const kullaniciSiparisleriGetir = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciSiparisSil = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciFavorileriGetir = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciFavoriSil = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}

module.exports = {
    kayitOl,
    girisYap,
    kullaniciGetir,
    kullaniciGuncelle,
    kullaniciAdresleriGetir,
    kullaniciAdresEkle,
    kullaniciAdresGuncelle,
    kullaniciAdresSil,
    kullaniciSiparisleriGetir,
    kullaniciSiparisSil,
    kullaniciFavorileriGetir,
    kullaniciFavoriSil
}