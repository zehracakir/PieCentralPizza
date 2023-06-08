var express = require('express');
var router = express.Router();
const jwt = require('express-jwt')
const auth = jwt.expressjwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['sha1', 'RS256', 'HS256']
});
var ctrlSiparisler = require("../controllers/Siparis");

router.put("/admin/:userid/siparisler/:siparisid", auth, ctrlSiparisler.adminSiparisDurumGuncelle);

router
    .route("/kullanici/:userid/siparisler")
    .get(auth, ctrlSiparisler.kullaniciSiparisleriGetir);

router
    .route("/kullanici/:userid/siparisler/:urunid")
    .post(auth, ctrlSiparisler.kullaniciSiparisEkle);

router
    .route("/kullanici/:userid/siparisler/:siparisid")
    .get(auth, ctrlSiparisler.kullaniciSiparisGetir)
    .delete(auth, ctrlSiparisler.kullaniciSiparisSil);


router
    .route('/admin/siparisler')
    .get(auth, ctrlSiparisler.tumSiparisleriGetir); //tum siparisleri listeleme (admin icin)

router
    .route('/admin/siparisler/:siparisDurum')
    .get(auth, ctrlSiparisler.durumaGoreSiparisGetir); //siparisleri durumlarina göre listeleme. hazirlaniyor/yolda/teslim-edildi (admin icin)

router
    .route('/admin/:siparisTarihi')
    .get(auth, ctrlSiparisler.tariheGoreSiparisGetir); //siparisleri tarihlerine göre listeleme. son-bir-gun/son-bir-hafta/son-bir-ay (admin icin)


module.exports = router;