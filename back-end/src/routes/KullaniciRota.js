var express = require('express');
var router = express.Router();
var ctrlKullanicilar = require("../controllers/Kullanici");


router.post("/kayitol",ctrlKullanicilar.kayitOl);
router.post("/girisyap",ctrlKullanicilar.girisYap);

router
.route("/kullanici/:userid")
.get(ctrlKullanicilar.kullaniciGetir)
.put(ctrlKullanicilar.kullaniciGuncelle);

router
.route("/kullanici/:userid/favoriler")
.get(ctrlKullanicilar.kullaniciFavorileriGetir)
.post(ctrlKullanicilar.kullaniciFavoriEkle);

router.delete("/kullanici/:userid/favoriler/:urunid",ctrlKullanicilar.kullaniciFavoriSil)


router
.route("kullanici/:userid/siparisler")
.get(ctrlKullanicilar.kullaniciSiparisleriGetir)
.post(ctrlKullanicilar.kullaniciSiparisEkle)

router
.route("kullanici/:userid/siparisler/:siparisid")
.get(ctrlKullanicilar.kullaniciSiparisGetir)
.delete(ctrlKullanicilar.kullaniciSiparisSil);