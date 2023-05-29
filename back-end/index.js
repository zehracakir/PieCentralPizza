require('dotenv').config();
const express = require("express");
require("./src/clients/db")
const app = express();

app.listen(4000, () => {
    console.log("listening on port 4000");
})
// byusuf test