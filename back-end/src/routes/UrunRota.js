var express = require('express');
var router = express.Router();
var ctrlUrun=require('../controllers/Urun')

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


// router
// .route('/pizzalar/:kategori')
// .get(ctrlUrun.kategoriyeGoreUrunGetir) //kategoriye gore urun getirme (tum kullanicilar icin)

// router
// .route('/yan-urunler/:kategori')
// .get(ctrlUrun.kategoriyeGoreUrunGetir) //kategoriye gore urun getirme (tum kullanicilar icin)

module.exports = router;