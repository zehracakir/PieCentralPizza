var express = require('express');
var router = express.Router();
var ctrlSiparisler = require("../controllers/Siparis");

router
.route('/admin/siparisler')
.get(ctrlSiparisler.tumSiparisleriGetir); //tum siparisleri listeleme (admin icin)

router
.route('/admin/siparisler/:siparisDurum')
.get(ctrlSiparisler.durumaGoreSiparisGetir); //siparisleri durumlarina göre listeleme. hazirlaniyor/yolda/teslim-edildi (admin icin)


module.exports = router;