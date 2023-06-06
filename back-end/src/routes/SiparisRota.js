var express = require('express');
var router = express.Router();
const jwt = require('express-jwt')
const auth = jwt.expressjwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['sha1', 'RS256', 'HS256']
});
var ctrlSiparisler = require("../controllers/Siparis");

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

module.exports = router;