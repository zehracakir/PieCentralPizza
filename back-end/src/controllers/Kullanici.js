const KullaniciSema = require("../models/KullaniciSema");
var mongoose = require("mongoose");

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

const kullaniciAdresleriGetir = async function (req, res) {
    const userid = req.params.userid;
    try {
        const adresler = await KullaniciSema.findById(userid).select("adres");
        if (adresler) {
            cevapOlustur(res, 200, adresler.adres);
        } else {
            cevapOlustur(res, 400, { "durum": "id'ye ait kullanici bulunamadi" });
        }
    } catch (error) {
        cevapOlustur(res, 400, error);
    }
}
const kullaniciAdresEkle = async function (req, res) {
    //adresAdi,mahalle,sokak,ilce,sehir
    const userid = req.params.userid;

    const adresAdi = req.body.adresAdi;
    const mahalle = req.body.mahalle;
    const sokak = req.body.sokak;
    const ilce = req.body.ilce;
    const sehir = req.body.sehir;

    const adres = [adresAdi, mahalle, sokak, ilce, sehir].join(", ");
    try {
        const kullaniciAdres = await KullaniciSema.findById(userid).select("adres");
        if (kullaniciAdres) {
            const yeniAdres = {
                _id: new mongoose.Types.ObjectId(),
                adres: adres
            };
            kullaniciAdres.adres.push(yeniAdres);
            try {
                const adres = await kullaniciAdres.save();
                cevapOlustur(res, 200, adres);
            } catch (error) {
                cevapOlustur(res, 200, error);
            }
        } else {
            cevapOlustur(res, 404, { "durum": "id ile eslesen eleman bulunamadi" })
        }
    } catch (error) {
        cevapOlustur(res, 200, error);
    }
}
const kullaniciAdresGuncelle = function (req, res) {
    const userid = req.params.userid;
    const adresid = req.params.adresid;
    const adresAdi = req.body.adresAdi;
    const mahalle = req.body.mahalle;
    const sokak = req.body.sokak;
    const ilce = req.body.ilce;
    const sehir = req.body.sehir;
    const adres = [adresAdi, mahalle, sokak, ilce, sehir].join(", ");

    KullaniciSema.findById(userid)
        .then(kullanici => {
            if (kullanici.adres && kullanici.adres.length > 0) {
                var gelenAdres = kullanici.adres.id(adresid);
                if (!gelenAdres) {
                    cevapOlustur(res, 404, { "durum": "adres bulunamadi" })
                } else {
                    gelenAdres.adres = adres;
                    kullanici.save()
                        .then(adres => {
                            cevapOlustur(res, 200, adres);
                        })
                        .catch(err => {
                            cevapOlustur(res, 400, err);
                        })
                }
            }
            else {
                cevapOlustur(res, 404, { "durum": "kisi adresi bulunamadi" });
            }
        })
        .catch(err => {
            cevapOlustur(res, 400, err);
        })


}
const kullaniciAdresSil = async function (req, res) {
    const userid = req.params.userid;
    const adresid = req.params.adresid;
    if (!userid || !adresid) {
        cevapOlustur(res, 404, { "durum": "userid ve adresid parametrelerini giriniz" });
    } else {
        try {
            const kullaniciAdresleri = await KullaniciSema.findById(userid).select("adres");
            if (!kullaniciAdresleri) {
                cevapOlustur(res, 404, { "durum": "kullanici bulunamadi" })
            } else {
                kullaniciAdresleri.adres.pull(adresid);
                try {
                    const response = await kullaniciAdresleri.save();
                    cevapOlustur(res, 204, response)
                } catch (error) {
                    cevapOlustur(res, 404, { "durum": "birhata" })
                }

            }
        } catch (error) {
            cevapOlustur(res, 404, { "durum": "ikihata" });
        }

    }

}
const kullaniciSiparisGir = function (req,res){
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciSiparisleriGetir = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciSiparisSil = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciFavoriEkle = function(req,res){

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
    kullaniciSiparisGir,
    kullaniciFavorileriGetir,
    kullaniciFavoriSil,
    kullaniciFavoriEkle
}