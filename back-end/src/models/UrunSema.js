const mongoose = require("mongoose");

const urunSema = new mongoose.Schema({
    urunAdi: { type: String, required: true, unique: true },
    urunDetay: { type: String },
    urunOzellikler: [String],
    resimUrl: { type: String, required: true },
    urunFiyat: { type: Number, required: true },
    stok: { type: Number, required: true, min: 0 },
    kategori: { type: String, required: true }
});
mongoose.model("urun", urunSema, "urunler")
const UrunSema = mongoose.model("urun");
module.exports = UrunSema;