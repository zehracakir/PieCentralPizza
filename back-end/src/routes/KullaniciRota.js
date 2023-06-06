var express = require('express');
var router = express.Router();
var ctrlKullanicilar = require("../controllers/Kullanici");

router
.route('/buyukten-kucuge')
.get(ctrlKullanicilar.buyuktenKucugeSirala)   //tum kullanicilari z den a ya siralama

router
.route('/kucukten-buyuge')
.get(ctrlKullanicilar.kucuktenBuyugeSirala)   //tum kullanicilari a dan z ye siralama

router
.route('/en-yeni-kayittan-sirala')
.get(ctrlKullanicilar.enYeniKayittanSirala)   //tum kullanicilari en yeni kayit olandan en eski kayit olana dogru siralama

router
.route('/en-eski-kayittan-sirala')
.get(ctrlKullanicilar.enEskiKayittanSirala)   //tum kullanicilari en eski kayit olandan en yeni kayit olana dogru siralama

module.exports = router;