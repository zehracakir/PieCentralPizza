var mongoose = require("mongoose");

const urunSema = new mongoose.Schema({
    urunAdi: { type: String },
    urunDetay: { type: String },
    urunOzellikler: [String],
    resimUrl: { type: String },
    urunFiyat: { type: Number },
    stok: { type: Number },
    kategori: { type: String }
});
var siparisSema = new mongoose.Schema({
    siparis: [urunSema],
    siparisEden: { type: String, required: true },
    siparisEdenId: {type:String, required: true},
    siparisTarihi: { type: Date, default: Date.now },
    siparisAdres: String,
    siparisDurum: { type: String, default: "Hazirlaniyor" },
});
mongoose.model("siparis", siparisSema, "siparisSema")

const SiparisSema = mongoose.model("siparis");
module.exports = SiparisSema;