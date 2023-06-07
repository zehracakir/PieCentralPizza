const passport = require("passport");
const mongoose = require("mongoose");
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
    const sifre = req.body.sifre;
    if (!isim || !kullaniciAdi || !email || !sifre) {
        cevapOlustur(res, 400, { "hata": "Bütün alanlar gereklidir" })
        return;
    }
    KullaniciSema.create({
        kullaniciAdi: kullaniciAdi,
        isim: isim,
        email: email
    })
        .then(kullanici => {
            kullanici.sifreAyarla(sifre);
            kullanici.save()
                .then(response => {
                    const token = kullanici.tokenUret();
                    cevapOlustur(res, 201, { "token": token });
                })
                .catch(err => cevapOlustur(res, 400, err))
        })
        .catch(err => { cevapOlustur(res, 400, err) });
}

const girisYap = function (req, res) {
    const email = req.body.email;
    const sifre = req.body.sifre;
    if (!email || !sifre) {
        cevapOlustur(res, 400, { "hata": "email ve sifre gereklidir" });
        return;
    }
    else {
        passport.authenticate("local", (error, kullanici, info) => {
            let token;
            if (error) {
                cevapOlustur(res, 404, error)
                return;
            }
            if (kullanici) {
                token = kullanici.tokenUret();
                cevapOlustur(res, 200, { "token": token })
            } else {
                cevapOlustur(res, 401, info)
                return;
            }
        })(req, res);
    }
}

const benKimim = function (req, res) {
    const userId = req.auth._id;
    if (userId) {
        KullaniciSema.findById(userId).select("_id otorite")
            .then(kullanici => {
                if (!kullanici) {
                    cevapOlustur(res, 404, { "hata": "kullanici bulunamadi" })
                } else {
                    cevapOlustur(res, 200, kullanici)
                }
            })
            .catch(err => cevapOlustur(res, 404, err))
    }
    else {
        cevapOlustur(res, 401, { "hata": "kullanici bulunamadi" })
    }
}

const kullaniciGetir = async function (req, res) {
    const userid = req.params.userid;
    if (userid == req.auth._id || req.auth.otorite == "admin") {
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
    } else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }
}

const kullaniciGuncelle = async function (req, res) {
    const userid = req.params.userid;

    if (userid == req.auth._id || req.auth.otorite == "admin") {
        const kullaniciAdi = req.body.kullaniciAdi;
        const email = req.body.email;
        const telefonNo = req.body.telefonNo;
        if (!kullaniciAdi || !email || !telefonNo) {
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
                    cevapOlustur(res, 200, save);
                } catch (error) {
                    cevapOlustur(res, 400, error);
                }

            } catch (error) {
                cevapOlustur(res, 400, error)
            }
        }
    }
    else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }
}

const kullaniciSifreGuncelle = async function (req, res) {
    const userid = req.params.userid;

    if (userid == req.auth._id || req.auth.otorite == "admin") {
        const eskiSifre = req.body.eskiSifre;
        const yeniSifre = req.body.yeniSifre;
        if (!eskiSifre || !yeniSifre) {
            cevapOlustur(res, 400, { "hata": "butun alanlari doldur" });
            return;
        } else if (eskiSifre == yeniSifre) {
            cevapOlustur(res, 400, { "hata": "eski sifre ile yeni sifre ayni olamaz" });
        } else {
            KullaniciSema.findById(userid).select("hash salt")
                .then(kullanici => {
                    if (kullanici) {
                        if (kullanici.sifreDogrumu(eskiSifre)) {
                            kullanici.sifreAyarla(yeniSifre);
                            kullanici.save()
                                .then(response => cevapOlustur(res, 200, response))
                                .catch(err => cevapOlustur(res, 400, err))
                        } else {
                            cevapOlustur(res, 400, { "hata": "eski sifre yanlis" });
                        }
                    } else {
                        cevapOlustur(res, 400, { "hata": "kullanici bulunamadi" });
                    }
                })
                .catch(err => cevapOlustur(res, 400, err))
        }
    } else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }
}

const kullaniciAdresleriGetir = async function (req, res) {
    const userid = req.params.userid;

    if (userid == req.auth._id || req.auth.otorite == "admin") {
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
    else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }


}

const kullaniciAdresEkle = async function (req, res) {
    //adresAdi,mahalle,sokak,ilce,sehir
    const userid = req.params.userid;
    if (userid == req.auth._id || req.auth.otorite == "admin") {
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
                    cevapOlustur(res, 201, adres);
                } catch (error) {
                    cevapOlustur(res, 400, error);
                }
            } else {
                cevapOlustur(res, 404, { "durum": "id ile eslesen eleman bulunamadi" })
            }
        } catch (error) {
            cevapOlustur(res, 200, error);
        }
    } else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }

}

const kullaniciAdresGuncelle = function (req, res) {
    const userid = req.params.userid;
    if (userid == req.auth._id || req.auth.otorite == "admin") {
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
    else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }



}

const kullaniciAdresSil = async function (req, res) {
    const userid = req.params.userid;
    if (userid == req.auth._id || req.auth.otorite == "admin") {
        const adresid = req.params.adresid;
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
            cevapOlustur(res, 404, error);
        }
    }
    else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }
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
    benKimim,
    kullaniciSifreGuncelle
}