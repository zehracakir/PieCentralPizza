var express = require('express');
var router = express.Router();
var ctrlKullanicilar = require("../controllers/Kullanici");

router
.route('/buyukten-kucuge')
.get(ctrlKullanicilar.buyuktenKucugeSirala)   //tum kullanicilari z den a ya siralama


router
.route('/kucukten-buyuge')
.get(ctrlKullanicilar.kucuktenBuyugeSirala)   //tum kullanicilari a dan z ye siralama

module.exports = router;