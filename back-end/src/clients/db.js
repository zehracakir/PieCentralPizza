var mongoose = require("mongoose");
var dbURI = process.env.DB_URI;

mongoose.connect(dbURI);

mongoose.connection.on("connected",function() {
    console.log(dbURI + " adresindeki veritabanina bağlanildi!\n");
});

mongoose.connection.on("error",function(){
    console.log("Baglanti hatasi!");
});

mongoose.connection.on("disconnected",function(){
    console.log("Baglanti kesildi!");
})

function kapat(msg, callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}
process.on("SIGINT",function(){
    kapat("Uygulama Kapatıldı!",function(){
        process.exit(0);
    });
});
require("../models/UrunSema");
require("../models/SiparisSema");
require("../models/KullaniciSema");