const KullaniciSema = require("../models/KullaniciSema");
const UrunSema = require("../models/UrunSema");


const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const kullaniciFavoriEkle = function (req, res) {
    const userid = req.params.userid;
    if (req.auth._id == userid || req.auth.otorite == "admin") {
        const urunid = req.params.urunid;
        UrunSema.findById(urunid)
            .then(urun => {
                if (!urun) {
                    cevapOlustur(res, 404, { "hata": "urun bulunamadi" });
                } else {
                    KullaniciSema.findById(userid).select("favoriler")
                        .then(favoriler => {
                            if (favoriler.favoriler.some(fav => fav.equals(urunid))) {
                                cevapOlustur(res, 400, { "hata": "urun zaten favorilerde bulunuyor" });
                            } else {
                                favoriler.favoriler.push(urun);
                                favoriler.save()
                                    .then(response => {
                                        cevapOlustur(res, 201, response);
                                    })
                                    .catch(err => {
                                        cevapOlustur(res, 400, { "hata": "eklenirken bir sorun olustu" });
                                    })
                            }
                        })
                        .catch(err => {
                            cevapOlustur(res, 404, { "hata": "kullanici bulunamadi" });
                        })
                }
            })
            .catch(err => {
                cevapOlustur(res, 400, err);
            })
    } else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }

}

const kullaniciFavorileriGetir = function (req, res) {
    const userid = req.params.userid;
    if (req.auth._id == userid || req.auth.otorite == "admin") {
        KullaniciSema.findById(userid).select("favoriler")
            .then(favoriler => {
                if (favoriler) {
                    cevapOlustur(res, 200, favoriler);
                } else {
                    cevapOlustur(res, 404, { "hata": "kullanici bulunamadi" });
                }
            })
            .catch(err => cevapOlustur(res, 400, err))
    } else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }
}

const kullaniciFavoriSil = function (req, res) {
    const userid = req.params.userid;
    if (req.auth._id == userid || req.auth.otorite == "admin") {
        const urunid = req.params.urunid;

        KullaniciSema.findById(userid).select("favoriler")
            .then(async favoriliste => {
                if (favoriliste) {
                    if (!favoriliste.favoriler.some(fav => fav.equals(urunid))) {
                        cevapOlustur(res, 404, { "hata": "ilgili urun favorilerde yok" });
                    } else {
                        favoriliste.favoriler.pull(urunid)
                        try {
                            await favoriliste.save();
                            cevapOlustur(res, 200, { "hata": `${urunid}'li urun favorilerden silindi` });
                        } catch (error) {
                            cevapOlustur(res, 400, error)
                        }
                    }
                } else {
                    cevapOlustur(res, 404, { "hata": "kullanici bulunamadi" })
                }
            })
            .catch(err => {
                cevapOlustur(res, 400, err);
            })
    } else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }

}

const urunAra = function (req, res) {
    const urun = req.body.urun;
    if (urun.toString().length == 0) {
        cevapOlustur(res, 400, { "hata": "Aranacak kelime bos olamaz" });
    } else {
        UrunSema.find({ "urunAdi": { "$regex": urun, "$options": "i" } })  // i: case insensitive
            .then(urunler => {
                if (urunler.length == 0) {
                    cevapOlustur(res, 404, { "hata": "Aradiginz kelime ile eslesen urun bulunamadi" });
                } else if (urunler) {
                    cevapOlustur(res, 200, urunler);
                }
                else {
                    cevapOlustur(res, 404, { "hata": "urun bulunamadi" });
                }
            })
            .catch(err => {
                cevapOlustur(res, 400, err);
            })
    }

}

const urunEkle = async function (req, res) {
    if (req.auth.otorite == "admin") {
        const urunAdi = req.body.urunAdi;
        const urunDetay = req.body.urunDetay;
        const urunOzellikler = req.body.urunOzellikler ? req.body.urunOzellikler.split(",").map(item => item.trim()) : [];
        const resimUrl = req.body.resimUrl;
        const urunFiyat = req.body.urunFiyat;
        const stok = req.body.stok;
        const kategori = req.body.kategori;

        if (!urunAdi || !resimUrl || !urunFiyat || !stok || !kategori) {
            cevapOlustur(res, 400, { "hata": "Bütün alanlar gereklidir" })
            return;
        }
        try {
            const mevcutUrun = await UrunSema.findOne({ urunAdi: urunAdi });

            if (mevcutUrun) {
                cevapOlustur(res, 400, { "hata": "Bu isimde bir ürün zaten bulunmakta!" });
            } else {
                const urun = await UrunSema.create({
                    urunAdi: urunAdi,
                    urunDetay: urunDetay,
                    urunOzellikler: urunOzellikler,
                    resimUrl: resimUrl,
                    urunFiyat: urunFiyat,
                    stok: stok,
                    kategori: kategori
                });
                cevapOlustur(res, 201, urun);
            }
        } catch (error) {
            cevapOlustur(res, 400, error);
        }
    } else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }

}

const urunGetir = async function (req, res) {
    try {
        const tumUrunler = await UrunSema.find();
        if (tumUrunler.length > 0) {
            cevapOlustur(res, 200, tumUrunler);
        } else {
            cevapOlustur(res, 404, { "hata": "kayıtlı ürün bulunamadı" });
        }
    } catch (error) {
        cevapOlustur(res, 500, error);
    }
}

const kategoriyeGoreUrunGetir = async (req, res) => {
    const kategori = req.params.kategori;
    try {
        const urunler = await UrunSema.find({ kategori: kategori });
        if (urunler.length > 0) {
            cevapOlustur(res, 200, urunler);
        } else {
            cevapOlustur(res, 404, { "hata": "kategoriye ait ürün bulunamadı" });
        }
    } catch (error) {
        cevapOlustur(res, 500, error);
    }
}

const urunDetayGetir = async function (req, res) {
    const urunid = req.params.urunid;
    try {
        const urun = await UrunSema.findById(urunid);
        if (urun) {
            cevapOlustur(res, 200, urun)
        } else {
            cevapOlustur(res, 404, { "hata": "urun bulunamadi" })
        }
    } catch (error) {
        cevapOlustur(res, 404, error)
    }
}

const urunGuncelle = async function (req, res) {
    const urunid = req.params.urunid;
    if (req.auth.otorite == "admin") {
        const urunAdi = req.body.urunAdi;
        const urunDetay = req.body.urunDetay;
        const urunOzellikler = req.body.urunOzellikler ? req.body.urunOzellikler.split(",").map(item => item.trim()) : [];
        const resimUrl = req.body.resimUrl;
        const urunFiyat = req.body.urunFiyat;
        const stok = req.body.stok;
        const kategori = req.body.kategori;

        if (!urunid || !urunAdi || !resimUrl || !urunFiyat || !stok || !kategori) {
            cevapOlustur(res, 400, { "hata": "butun alanlari doldur" });
            return;
        }
        else {
            try {
                const urun = await UrunSema.findById(urunid);
                urun.urunAdi = urunAdi;
                urun.urunDetay = urunDetay;
                urun.urunOzellikler = urunOzellikler;
                urun.resimUrl = resimUrl;
                urun.urunFiyat = urunFiyat;
                urun.stok = stok;
                urun.kategori = kategori;
                try {
                    const save = await urun.save();
                    cevapOlustur(res, 200, save);
                } catch (error) {
                    cevapOlustur(res, 400, error);
                }

            } catch (error) {
                cevapOlustur(res, 400, error)
            }
        }
    } else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }



}

const urunSil = async function (req, res) {
    const urunid = req.params.urunid;
    if (req.auth.otorite == "admin") {
        try {
            const urun = await UrunSema.findByIdAndRemove(urunid);
            if (!urun) {
                return cevapOlustur(res, 404, { "hata": "urun bulunamadi" });
            }

            return cevapOlustur(res, 200, { "durum": "urun basariyla silindi" });
        } catch (error) {
            return cevapOlustur(res, 500, { "hata": "bir hata olustu" });
        }
    } else {
        cevapOlustur(res, 401, { "hata": "yetkiniz yok" });
    }


}

module.exports = {
    kullaniciFavoriEkle,
    kullaniciFavorileriGetir,
    kullaniciFavoriSil,
    urunAra,
    urunEkle,
    urunGetir,
    urunDetayGetir,
    kategoriyeGoreUrunGetir,
    urunGuncelle,
    urunSil
}