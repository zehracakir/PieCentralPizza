const mongoose=require("mongoose");

const UrunSema=new mongoose.Schema({
    urunAdi:{type:String,required:true},
    urunDetay:String,
    urunOzellikler:[String],
    resimUrl:{type:String,required:true},
    urunFiyat:{type:Number,required:true},
    stok:{type:Number,required:true,min:0}
});
mongoose.model("urun", UrunSema,"urunler")