var mongoose = require("mongoose");
const SiparisSema = require("./SiparisSema")
// const UrunSema = require("./UrunSema")
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
    // favoriler:[UrunSema],
    siparisler:[SiparisSema.schema]
});
mongoose.model("kullanici",kullaniciSema,"kullaniciSema")
const KullaniciSema = mongoose.model("kullanici");
module.exports = KullaniciSema;