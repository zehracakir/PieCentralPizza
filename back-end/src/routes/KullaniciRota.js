var express = require('express');
var router = express.Router();
var ctrlKullanicilar = require("../controllers/Kullanici");

router
.route('/buyukten-kucuge')
.get(ctrlKullanicilar.buyuktenKucugeSirala)   //tum kullanicilari a-z ye siralama

module.exports = router;