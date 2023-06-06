var express = require('express');
var router = express.Router();
const jwt = require('express-jwt')
const auth = jwt.expressjwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['sha1', 'RS256', 'HS256']
});
var ctrlKullanicilar = require("../controllers/Kullanici");


router.post("/kayitol", ctrlKullanicilar.kayitOl);
router.post("/girisyap", ctrlKullanicilar.girisYap);
router.get("/benkimim", auth, ctrlKullanicilar.benKimim);

router
    .route("/kullanici/:userid")
    .get(auth, ctrlKullanicilar.kullaniciGetir)
    .put(auth, ctrlKullanicilar.kullaniciGuncelle);

router
    .route("/kullanici/:userid/adreslerim")
    .get(auth, ctrlKullanicilar.kullaniciAdresleriGetir)
    .post(auth, ctrlKullanicilar.kullaniciAdresEkle)

router
    .route("/kullanici/:userid/adreslerim/:adresid")
    .put(auth, ctrlKullanicilar.kullaniciAdresGuncelle)
    .delete(auth, ctrlKullanicilar.kullaniciAdresSil);



module.exports = router;