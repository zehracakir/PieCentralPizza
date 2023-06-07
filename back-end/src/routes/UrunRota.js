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



module.exports = router;