var express = require('express');
var router = express.Router();
var ctrlKullanicilar = require("../controllers/Kullanici");

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