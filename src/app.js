const express = require("express");
const bodyParser = require("body-parser");
const gamesRoutes = require("./routes/gamesRoutes.js");

const app = express();

app.use(bodyParser.json());

app.use("/api/Lionscrosoft", gamesRoutes);

module.exports = app;