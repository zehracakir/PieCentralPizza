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
                    cevapOlustur(res, 404, { "hata": "kullanici bulunamadi" });
                }
                else {
                    cevapOlustur(res, 200, kullaniciSiparisleri);
                }
            })
            .catch(err => {
                cevapOlustur(res, 400, err)
            })
    } else {
        cevapOlustur(res, 403, { "hata": "yetkiniz yok" });
    }

}

const kullaniciSiparisGetir = function (req, res) {
    const userid = req.params.userid;
    if (req.auth._id == userid || req.auth.otorite == "admin") {
        const siparisid = req.params.siparisid;
        KullaniciSema.findById(userid).select("siparisler")
            .then(kullaniciSiparisleri => {
                if (!kullaniciSiparisleri) {
                    cevapOlustur(res, 404, { "hata": "kullanici bulunamadi" });
                } else {
                    const siparis = kullaniciSiparisleri.siparisler.filter(siparis => siparis._id == siparisid);
                    if (siparis.length == 0) {
                        cevapOlustur(res, 404, { "hata": "siparis bulunamadi" });
                    } else {
                        cevapOlustur(res, 200, siparis);
                    }
                }
            })
            .catch(err => cevapOlustur(res, 400, err))
    } else {
        cevapOlustur(res, 403, { "hata": "yetkiniz yok" });
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
                    cevapOlustur(res, 404, { "hata": "urun bulunamadi" });
                } else if (urun.stok <= 0) {
                    cevapOlustur(res, 404, { "hata": "urunun stogu bulunamadi" });
                } else {
                    KullaniciSema.findById(userid)
                        .then(async kullanici => {
                            if (!kullanici) {
                                cevapOlustur(res, 200, { "hata": "kullanici bulunamadi" });
                            } else {
                                try {
                                    const siparis = await SiparisSema.create({
                                        siparis: urun,
                                        siparisEden: kullanici.kullaniciAdi,
                                        siparisAdres: siparisAdres,
                                        siparisEdenId: userid
                                    })
                                    kullanici.siparisler.push(siparis)
                                    kullanici.save()
                                        .then(response => {
                                            cevapOlustur(res, 201, response);
                                        })
                                        .catch(err => {
                                            cevapOlustur(res, 400, { "hata": "eklenirken bir sorun olustu" });
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
        cevapOlustur(res, 403, { "hata": "yetkiniz yok" });
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
                                        cevapOlustur(res, 404, { "hata": "kullaniciya ait siparis bulunamadi" });
                                    }
                                })
                                .catch(err => cevapOlustur(res, 400, err))
                        })
                        .catch(err => cevapOlustur(res, 400, err))
                } else {
                    cevapOlustur(res, 404, { "hata": "id ile eslesen kullanici bulunamadi" });
                }
            })
            .catch(err => cevapOlustur(res, 400, err))
    } else {
        cevapOlustur(res, 403, { "hata": "yetkiniz yok" });
    }

}

const adminSiparisDurumGuncelle = function (req, res) {
    if (req.auth.otorite == "admin") {
        const userid = req.params.userid;
        const siparisid = req.params.siparisid;
        if (userid || siparisid) {
            KullaniciSema.findById(userid).select("siparisler")
                .then(siparisler => {
                    if (siparisler) {
                        const siparis = siparisler.siparisler.filter(siparis => siparis._id == siparisid);
                        if (siparis.length == 0) {
                            cevapOlustur(res, 404, { "hata": "siparis bulunamadi" });
                        } else {
                            const siparisDurum = req.body.siparisDurum;
                            if (!siparisDurum) {
                                cevapOlustur(res, 400, { "hata": "siparis durumu zorunlu alandir" });
                            } else {
                                siparis[0].siparisDurum = siparisDurum;
                                siparisler.save()
                                    .then(response => {
                                        SiparisSema.findByIdAndUpdate(siparisid, { siparisDurum: siparisDurum })
                                            .then(response1 => {
                                                if (response1) {
                                                    cevapOlustur(res, 200, response1);
                                                } else {
                                                    cevapOlustur(res, 404, { "hata": "siparis bulunamadi" });
                                                }
                                            })
                                            .catch(err => cevapOlustur(res, 400, err))
                                    })
                                    .catch(err => cevapOlustur(res, 400, err))
                            }
                        }
                    } else {
                        cevapOlustur(res, 404, { "hata": "kullanici bulunamadi" });
                    }
                })
                .catch(err => cevapOlustur(res, 400, err))
        } else {
            cevapOlustur(res, 400, { "hata": "kullanici veya siparis id zorunlu alanlardır" });
        }
    } else {
        cevapOlustur(res, 403, { "hata": "yetkiniz yok" });
    }
}

const tumSiparisleriGetir = async function (req, res) {
    if (req.auth.otorite == "admin") {
        try {
            const siparisListesi = await SiparisSema.find().select("siparis.resimUrl siparisEden siparisDurum siparisTarihi siparis.urunAdi siparisAdres siparisEdenId");  //adres array, duzenleme yapilabilir
            cevapOlustur(res, 200, siparisListesi);
        } catch (err) {
            cevapOlustur(res, 500, { "hata": 'Bir hata oluştu' });
        }
    } else {
        cevapOlustur(res, 403, { "hata": "yetkiniz yok" });
    }

};

const durumaGoreSiparisGetir = async (req, res) => {
    const siparisDurum = req.params.siparisDurum;
    if (req.auth.otorite == "admin") {
        try {
            let siparisler, durum;

            if (siparisDurum === "teslim-edildi") {
                durum = "Teslim edildi"
            } else if (siparisDurum === "hazirlaniyor") {
                durum = "Hazirlaniyor"
            } else if (siparisDurum === "yolda") {
                durum = "Yolda"
            } else {
                return cevapOlustur(res, 400, { "hata": "Böyle bir durum parametresi yok" });
            }
            siparisler = await SiparisSema.find({ siparisDurum: durum }).select("siparis.resimUrl siparisEden siparisDurum siparisTarihi siparis.urunAdi siparisAdres siparisEdenId");
            if (siparisler.length > 0) {
                cevapOlustur(res, 200, siparisler);
            } else {
                cevapOlustur(res, 404, { "hata": "Duruma göre sipariş bulunamadı" });
            }
        } catch (error) {
            cevapOlustur(res, 500, error);
        }
    } else {
        cevapOlustur(res, 403, { "hata": "yetkiniz yok" });
    }

};

const tariheGoreSiparisGetir = async (req, res) => {
    const siparisTarihi = req.params.siparisTarihi;
    if (req.auth.otorite == "admin") {
        try {
            let siparisler;
            const gecerliTarih = new Date();
            const tarih = new Date();

            if (siparisTarihi === "son-bir-gun") {
                tarih.setDate(gecerliTarih.getDate() - 1);
            } else if (siparisTarihi === "son-bir-hafta") {
                tarih.setDate(gecerliTarih.getDate() - 7);
            } else if (siparisTarihi === "son-bir-ay") {
                tarih.setMonth(gecerliTarih.getMonth() - 1);
            } else {
                return cevapOlustur(res, 400, { "hata": "Böyle bir tarih parametresi yok" });
            }

            siparisler = await SiparisSema.find({ siparisTarihi: { $gte: tarih } }).select("siparis.resimUrl siparisEden siparisDurum siparisTarihi siparis.urunAdi siparisAdres siparisEdenId");

            if (siparisler.length > 0) {
                cevapOlustur(res, 200, siparisler);
            } else {
                cevapOlustur(res, 404, { "hata": "Duruma göre sipariş bulunamadı" });
            }
        } catch (error) {
            cevapOlustur(res, 500, error);
        }
    } else {
        cevapOlustur(res, 403, { "hata": "yetkiniz yok" });
    }

};

module.exports = {
    kullaniciSiparisleriGetir,
    kullaniciSiparisSil,
    kullaniciSiparisGetir,
    kullaniciSiparisEkle,
    adminSiparisDurumGuncelle,
    tumSiparisleriGetir,
    durumaGoreSiparisGetir,
    tariheGoreSiparisGetir
}
