const KullaniciSema = require("../models/KullaniciSema");
const UrunSema = require("../models/UrunSema");
const SiparisSema = require("../models/SiparisSema");

const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const kullaniciSiparisleriGetir = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciSiparisGetir = function(req,res){
    cevapOlustur(res, 200, { "durum": "basarili" });

}
const kullaniciSiparisEkle = function(req,res){
    cevapOlustur(res, 200, { "durum": "basarili" });
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