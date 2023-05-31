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
.route("/kullanici/:userid/adreslerim")
.get(ctrlKullanicilar.kullaniciAdresleriGetir)
.post(ctrlKullanicilar.kullaniciAdresEkle)

router
.route("/kullanici/:userid/adreslerim/:adresid")
.put(ctrlKullanicilar.kullaniciAdresGuncelle)
.delete(ctrlKullanicilar.kullaniciAdresSil);

router
.route("/kullanici/:userid/siparislerim")
.get(ctrlKullanicilar.kullaniciSiparisleriGetir)
.post(ctrlKullanicilar.kullaniciSiparisGir)
.delete(ctrlKullanicilar.kullaniciSiparisSil);

router
.route("/kullanici/:userid/favoriler")
.get(ctrlKullanicilar.kullaniciFavorileriGetir)
.post(ctrlKullanicilar.kullaniciFavoriEkle);

router
.route("/kullanici/:userid/favoriler/:favoriid")
.delete(ctrlKullanicilar.kullaniciFavoriSil);



// router
// .route("/kullanici/:userid/favoriler")
// .get(ctrlKullanicilar.kullaniciFavorileriGetir)
// 

// router.delete("/kullanici/:userid/favoriler/:urunid",ctrlKullanicilar.kullaniciFavoriSil)


module.exports = router;