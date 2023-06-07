var express = require('express');
var router = express.Router();
const jwt = require('express-jwt')
const auth = jwt.expressjwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['sha1', 'RS256', 'HS256']
});
var ctrlUrun = require("../controllers/Urun");

router.get("/urunler/urunara", ctrlUrun.urunAra);

router
    .route("/kullanici/:userid/favoriler")
    .get(auth, ctrlUrun.kullaniciFavorileriGetir)


router
    .route("/kullanici/:userid/favoriler/:urunid")
    .post(auth, ctrlUrun.kullaniciFavoriEkle)
    .delete(auth, ctrlUrun.kullaniciFavoriSil);

router
    .route('/admin/urunler')
    .post(ctrlUrun.urunEkle) //urun ekleme (admin icin)

router
    .route('/admin/urunler/:urunid')
    .put(ctrlUrun.urunGuncelle) // urun guncelle (admin icin)
    .delete(ctrlUrun.urunSil); // urun sil (admin icin)

router
    .route('/urunler')
    .get(ctrlUrun.urunGetir)   //tum urunleri getirme (tum kullanicilar icin)

router
    .route('/urunler/:urunid')
    .get(ctrlUrun.urunDetayGetir); //urun detayi getirme (tum kullanicilar icin)


router
    .route('/kategoriler/:kategori')
    .get(ctrlUrun.kategoriyeGoreUrunGetir) //kategoriye gore urun getirme (tum kullanicilar icin)


module.exports = router;