var mongoose = require("mongoose");
const SiparisSema = require("./SiparisSema")
// const UrunSema = require("./UrunSema")
var kullaniciSema = new mongoose.Schema({
    kullaniciAdi: { type:String, required: true, unique: true },
    isim: { type:String, required:true },
    otorite:{ type:String , default: "kullanici"},
    email: { type:String, required: true, unique: true },
    adres: [String],
    hash: String,
    token: String,
    telefonNo: String,
    kayitTarihi: Date,
    // favoriler:[UrunSema],
    siparisler:[SiparisSema.schema]
});
mongoose.model("kullanici",kullaniciSema,"kullaniciSema")
const KullaniciSema = mongoose.model("kullanici");
module.exports = KullaniciSema;