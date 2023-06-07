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
router.put("/kullanici/:userid/sifredegistir", auth, ctrlKullanicilar.kullaniciSifreGuncelle);

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


router
    .route('/tum-kullanicilari-getir')
    .get(ctrlKullanicilar.tumKullanicilariGetir)   //admin tarafindan tum kullanicilar listelenir

router
    .route('/admin/kullanicilar/:kullaniciId')
    .delete(ctrlKullanicilar.kullaniciSil); // kullanici sil (admin icin)

router
    .route('/admin/kullanici-getir/:kayitTarihi')
    .get(ctrlKullanicilar.kayitOlmaTarihineGoreKullaniciGetir)   //tum kullanicilari en yeniden en eskiye ya da en eskiden en yeniye dogru siralama. en-eski/en-yeni (admin icin)

router
    .route('/admin/kullanici-sirala/:isim')
    .get(ctrlKullanicilar.kullaniciAdinaGoreKullaniciGetir)   //tum kullanicilari a dan z ye ve z den a ya dogru siralama. buyukten-kucuge-sirala/kucukten-buyuge-sirala (admin icin)



module.exports = router;