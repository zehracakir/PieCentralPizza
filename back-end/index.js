require('dotenv').config();
const express = require("express");
const cors = require("cors");
const siparisRota = require("./src/routes/SiparisRota");
const urunRota = require("./src/routes/UrunRota");
const kullaniciRota = require("./src/routes/KullaniciRota");

require("./src/clients/db")
const passport = require("passport");
require("./src/config/passport");
const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: process.env.ALLOWED_SOURCE, // izin verilen kaynak
  methods: 'GET,POST,DELETE,PUT', // izin verilen HTTP metotları
  allowedHeaders: 'Content-Type,Authorization' // izin verilen başlıklar
}));
app.use('/api', siparisRota);
app.use('/api', urunRota);
app.use('/api', kullaniciRota);
app.use(
  '/api',
  (req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.BACKEND_SOURCE);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  }
);
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: err.name + ': ' + err.message });
  }
});
app.listen(4000, () => {
  console.log("listening on port 4000");
})

//test bfzehra