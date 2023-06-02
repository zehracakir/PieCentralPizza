const KullaniciSema = require("../models/KullaniciSema");
const UrunSema = require("../models/UrunSema");
const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const kullaniciFavoriEkle = function (req, res) {
    const userid = req.params.userid;
    const urunid = req.params.urunid;
    UrunSema.findById(urunid)
        .then(urun => {
            if(!urun){
                cevapOlustur(res,404,{"durum":"urun bulunamadi"});
            }else{
                KullaniciSema.findById(userid).select("favoriler")
                .then(favoriler => {
                    if (favoriler.favoriler.some(fav => fav.equals(urunid))) {
                        cevapOlustur(res, 400, { "durum": "urun zaten favorilerde bulunuyor" });
                    }else{
                        favoriler.favoriler.push(urun);
                        favoriler.save()
                        .then(response => {
                            cevapOlustur(res, 201, response);
                        })
                        .catch(err => {
                            cevapOlustur(res, 400, { "durum": "eklenirken bir sorun olustu" });
                        })
                    }                        
                })
                .catch(err => {
                    cevapOlustur(res, 404, { "durum": "kullanici bulunamadi" });
                })
            }
        })
        .catch(err => {
            cevapOlustur(res,400,err);
        })
}

const kullaniciFavorileriGetir = function (req, res) {
    const userid = req.params.userid;
    KullaniciSema.findById(userid).select("favoriler")
    .then(favoriler => {
        if(favoriler){
            cevapOlustur(res,200,favoriler);
        }else{
            cevapOlustur(res,404,{"durum":"kullanici bulunamadi"});
        }
    })
    .catch(err => cevapOlustur(res,400,err))
}

const kullaniciFavoriSil = function (req, res) {
    const userid = req.params.userid;
    const urunid = req.params.urunid;

    KullaniciSema.findById(userid).select("favoriler")
    .then(async favoriliste => {
        if(favoriliste){
            if (!favoriliste.favoriler.some(fav => fav.equals(urunid))) {
                cevapOlustur(res, 404, { "durum": "ilgili urun favorilerde yok" });
            }else{
                favoriliste.favoriler.pull(urunid)
                try {
                    await favoriliste.save();
                    cevapOlustur(res,200,{"durum":`${urunid}'li urun favorilerden silindi`});
                } catch (error) {
                    cevapOlustur(res,400,error)
                }
            }
        }else{
            cevapOlustur(res,404,{"durum":"kullanici bulunamadi"})
        }
    })
    .catch(err => {
        cevapOlustur(res,400,err);
    })
}

module.exports = {
    kullaniciFavoriEkle,
    kullaniciFavorileriGetir,
    kullaniciFavoriSil
}