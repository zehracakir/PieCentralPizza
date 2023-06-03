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
    KullaniciSema.findById(userid).select("siparisler")
    .then(kullaniciSiparisleri => {
        if(!kullaniciSiparisleri){
            cevapOlustur(res,404,{"durum":"kullanici bulunamadi"});
        }
        else{
            cevapOlustur(res,200,kullaniciSiparisleri);
        }
    })
    .catch(err => {
        cevapOlustur(res,400,err)
    })
}
const kullaniciSiparisGetir = function(req,res){
    const userid = req.params.userid;
    const siparisid = req.params.siparisid;
    KullaniciSema.findById(userid).select("siparisler")
    .then(kullaniciSiparisleri => {
        if(!kullaniciSiparisleri){
            cevapOlustur(res,404,{"durum":"kullanici bulunamadi"});
        }else{
          const siparis =  kullaniciSiparisleri.siparisler.filter(siparis => siparis._id == siparisid);
          if(siparis.length == 0){
            cevapOlustur(res,404,{"durum":"siparis bulunamadi"});
          }else{
            cevapOlustur(res,200,siparis);
          }
        }
    })
    .catch(err => cevapOlustur(res,400,err))
}
const kullaniciSiparisEkle = function(req,res){
    const userid = req.params.userid;
    const urunid = req.params.urunid;
    const siparisAdres = req.body.siparisAdres;
    UrunSema.findById(urunid)
    .then(urun => {
        if(!urun){
            cevapOlustur(res,404,{"durum":"urun bulunamadi"});
        }else if(urun.stok <= 0){
            cevapOlustur(res,404,{"durum":"urunun stogu bulunamadi"});
        }else{
            KullaniciSema.findById(userid)
            .then(async kullanici => {
                if(!kullanici){
                    cevapOlustur(res,200,{"durum":"kullanici bulunamadi"});
                }else{
                    try {
                        const siparis = await SiparisSema.create({
                            siparis : urun,
                            siparisEden : kullanici.kullaniciAdi,
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
                        cevapOlustur(res,404, error)
                    }
                }
            })
            .catch(err => {
                cevapOlustur(res,400,err)
            })
        }
    })
    .catch(err => cevapOlustur(res,400,err))
}
const kullaniciSiparisSil = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
module.exports = {
    kullaniciSiparisleriGetir,
    kullaniciSiparisSil,
    kullaniciSiparisGetir,
    kullaniciSiparisEkle
}