require('dotenv').config();
const express = require("express");
const urunRota = require('./src/routes/UrunRota')
require('./src/clients/db')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',urunRota);

app.listen(4000, () => {
    console.log("listening on port 4000");
})





