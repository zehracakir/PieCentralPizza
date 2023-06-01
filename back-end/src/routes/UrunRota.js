var express = require('express');
var router = express.Router();
var ctrlUrun = require("../controllers/Urun");

router
.route("/kullanici/:userid/favoriler")
.get(ctrlUrun.kullaniciFavorileriGetir)
.post(ctrlUrun.kullaniciFavoriEkle);

router
.route("/kullanici/:userid/favoriler/:urunid")
.delete(ctrlUrun.kullaniciFavoriSil);



module.exports = router;