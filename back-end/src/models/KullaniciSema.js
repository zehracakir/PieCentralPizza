var mongoose = require("mongoose");
const urunSema=new mongoose.Schema({
    urunAdi:{type:String},
    urunDetay:{type:String},
    urunOzellikler:[String],
    resimUrl:{type:String},
    urunFiyat:{type:Number},
    stok:{type:Number},
    kategori:{type:String}
});
const siparisSema = new mongoose.Schema({
    siparis:[urunSema],
    siparisEden: { type:String},
    siparisTarihi: { type:Date, default:Date.now },
    siparisAdres: String,
    siparisDurum: String,
});
var adresSema = new mongoose.Schema({
    adres:String
});
var kullaniciSema = new mongoose.Schema({
    kullaniciAdi: { type:String, required: true, unique: true },
    isim: { type:String, required:true },
    otorite:{ type:String , default: "kullanici"},
    email: { type:String, required: true, unique: true },
    adres: [adresSema],
    hash: String,
    token: String,
    telefonNo: String,
    kayitTarihi: {type:Date, default:Date.now},
    favoriler:[urunSema],
    siparisler:[siparisSema]
});
mongoose.model("kullanici",kullaniciSema,"kullaniciSema")
const KullaniciSema = mongoose.model("kullanici");
module.exports = KullaniciSema;