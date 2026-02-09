const express = require("express");
const bodyParser = require("body-parser");
const gamesRoutes = require("./routes/gamesRoutes.js");
const saleRoutes = require("./routes/salesRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

app.use(bodyParser.json());

app.use("/api/Lionscrosoft/sale", saleRoutes);
app.use("/api/Lionscrosoft/user", userRoutes);
app.use("/api/Lionscrosoft", gamesRoutes);

module.exports = app;