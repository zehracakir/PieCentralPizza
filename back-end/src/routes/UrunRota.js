var express = require('express');
var router = express.Router();
var ctrlUrun = require("../controllers/Urun");

router
.route("/kullanici/:userid/favoriler")
.get(ctrlUrun.kullaniciFavorileriGetir)


router
.route("/kullanici/:userid/favoriler/:urunid")
.post(ctrlUrun.kullaniciFavoriEkle)
.delete(ctrlUrun.kullaniciFavoriSil);



module.exports = router;