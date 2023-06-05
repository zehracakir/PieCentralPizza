var mongoose = require("mongoose");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
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
kullaniciSema.methods.sifreAyarla = function(sifre) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto
        .pbkdf2Sync(sifre, this.salt, 1000, 64, "sha512")
        .toString("hex");
}
kullaniciSema.methods.sifreDogrumu = function(sifre) {
    const hash = crypto
    .pbkdf2Sync(sifre, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return this.hash === hash;
}
kullaniciSema.methods.tokenUret = function(){
    const skt = new Date();
    skt.setDate(skt.getDate() + 7);
     return jwt.sign(
        {
        _id: this._id,
        email: this.email,
        exp: parseInt(skt.getTime() / 1000, 10)
        },
     process.env.JWT_SECRET
     );
}
mongoose.model("kullanici",kullaniciSema,"kullaniciSema")
const KullaniciSema = mongoose.model("kullanici");
module.exports = KullaniciSema;