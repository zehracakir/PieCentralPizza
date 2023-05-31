var express = require('express');
var router = express.Router();
var ctrlUrun=require('../controllers/Urun')

// router
// .route('/admin/urunler/:urunid')
// 

router
.route('/admin/urunler')
.post(ctrlUrun.urunEkle);

module.exports = router;