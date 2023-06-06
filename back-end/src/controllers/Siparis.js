const KullaniciSema = require("../models/KullaniciSema");
const UrunSema = require("../models/UrunSema");
const SiparisSema = require("../models/SiparisSema");

const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const kullaniciSiparisleriGetir = function (req, res) {
    const userid = req.params.userid;

    if (req.auth._id == userid || req.auth.otorite == "admin") {
        KullaniciSema.findById(userid).select("siparisler")
            .then(kullaniciSiparisleri => {
                if (!kullaniciSiparisleri) {
                    cevapOlustur(res, 404, { "durum": "kullanici bulunamadi" });
                }
                else {
                    cevapOlustur(res, 200, kullaniciSiparisleri);
                }
            })
            .catch(err => {
                cevapOlustur(res, 400, err)
            })
    } else {
        cevapOlustur(res, 403, { "durum": "yetkiniz yok" });
    }

}
const kullaniciSiparisGetir = function (req, res) {
    const userid = req.params.userid;
    if (req.auth._id == userid || req.auth.otorite == "admin") {
        const siparisid = req.params.siparisid;
        KullaniciSema.findById(userid).select("siparisler")
            .then(kullaniciSiparisleri => {
                if (!kullaniciSiparisleri) {
                    cevapOlustur(res, 404, { "durum": "kullanici bulunamadi" });
                } else {
                    const siparis = kullaniciSiparisleri.siparisler.filter(siparis => siparis._id == siparisid);
                    if (siparis.length == 0) {
                        cevapOlustur(res, 404, { "durum": "siparis bulunamadi" });
                    } else {
                        cevapOlustur(res, 200, siparis);
                    }
                }
            })
            .catch(err => cevapOlustur(res, 400, err))
    } else {
        cevapOlustur(res, 403, { "durum": "yetkiniz yok" });
    }

}
const kullaniciSiparisEkle = function (req, res) {
    const userid = req.params.userid;
    if (req.auth._id == userid || req.auth.otorite == "admin") {
        const urunid = req.params.urunid;
        const siparisAdres = req.body.siparisAdres;
        UrunSema.findById(urunid)
            .then(urun => {
                if (!urun) {
                    cevapOlustur(res, 404, { "durum": "urun bulunamadi" });
                } else if (urun.stok <= 0) {
                    cevapOlustur(res, 404, { "durum": "urunun stogu bulunamadi" });
                } else {
                    KullaniciSema.findById(userid)
                        .then(async kullanici => {
                            if (!kullanici) {
                                cevapOlustur(res, 200, { "durum": "kullanici bulunamadi" });
                            } else {
                                try {
                                    const siparis = await SiparisSema.create({
                                        siparis: urun,
                                        siparisEden: kullanici.kullaniciAdi,
                                        siparisAdres: siparisAdres
                                    })
                                    kullanici.siparisler.push(siparis)
                                    kullanici.save()
                                        .then(response => {
                                            cevapOlustur(res, 201, response);
                                        })
                                        .catch(err => {
                                            cevapOlustur(res, 400, { "durum": "eklenirken bir sorun olustu" });
                                        })
                                } catch (error) {
                                    cevapOlustur(res, 404, error)
                                }
                            }
                        })
                        .catch(err => {
                            cevapOlustur(res, 400, err)
                        })
                }
            })
            .catch(err => cevapOlustur(res, 400, err))
    } else {
        cevapOlustur(res, 403, { "durum": "yetkiniz yok" });
    }

}
const kullaniciSiparisSil = function (req, res) {
    const userid = req.params.userid;
    if (req.auth._id == userid || req.auth.otorite == "admin") {
        const siparisid = req.params.siparisid;
        KullaniciSema.findById(userid).select("siparisler")
            .then(siparisler => {
                if (siparisler) {
                    siparisler.siparisler.pull(siparisid)
                    siparisler.save()
                        .then(response => {
                            SiparisSema.findByIdAndDelete(siparisid)
                                .then(response1 => {
                                    if (response1) {
                                        cevapOlustur(res, 200, response1)
                                    } else {
                                        cevapOlustur(res, 404, { "durum": "kullaniciya ait siparis bulunamadi" });
                                    }
                                })
                                .catch(err => cevapOlustur(res, 400, err))
                        })
                        .catch(err => cevapOlustur(res, 400, err))
                } else {
                    cevapOlustur(res, 404, { "durum": "id ile eslesen kullanici bulunamadi" });
                }
            })
            .catch(err => cevapOlustur(res, 400, err))
    } else {
        cevapOlustur(res, 403, { "durum": "yetkiniz yok" });
    }

}
module.exports = {
    kullaniciSiparisleriGetir,
    kullaniciSiparisSil,
    kullaniciSiparisGetir,
    kullaniciSiparisEkle
}