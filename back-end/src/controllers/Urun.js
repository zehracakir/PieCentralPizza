const KullaniciSema = require("../models/KullaniciSema");
const UrunSema = require("../models/UrunSema");
const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const kullaniciFavoriEkle = function(req,res){
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciFavorileriGetir = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
const kullaniciFavoriSil = function (req, res) {
    cevapOlustur(res, 200, { "durum": "basarili" });
}
module.exports = {
    kullaniciFavoriEkle,
    kullaniciFavorileriGetir,
    kullaniciFavoriSil
}