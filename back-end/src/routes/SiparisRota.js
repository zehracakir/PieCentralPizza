var express = require('express');
var router = express.Router();
var ctrlSiparisler = require("../controllers/Siparis");

router
.route('/admin/siparisler')
.get(ctrlSiparisler.tumSiparisleriGetir); //tum siparisleri listeleme (admin icin)


module.exports = router;