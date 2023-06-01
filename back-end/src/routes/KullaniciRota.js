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



module.exports = router;