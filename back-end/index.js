require('dotenv').config();
const express = require("express");
const siparisRota = require("./src/routes/SiparisRota");
const urunRota = require("./src/routes/UrunRota");
const kullaniciRota = require("./src/routes/KullaniciRota");

require("./src/clients/db")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/api',siparisRota);
app.use('/api',urunRota);
app.use('/api',kullaniciRota);

app.listen(4000, () => {
    console.log("listening on port 4000");
})