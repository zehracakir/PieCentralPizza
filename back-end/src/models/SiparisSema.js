var mongoose = require("mongoose");

var siparisSema = new mongoose.Schema({
    // siparis:[UrunSema]
    siparisEden: { type:String, required: true },
    siparisTarihi: { type:Date, default:Date.now },
    siparisAdres: String,
    siparisDurum: String,
});
mongoose.model("siparis",siparisSema,"siparisSema")
const SiparisSema = mongoose.model("siparis");
module.exports = SiparisSema;