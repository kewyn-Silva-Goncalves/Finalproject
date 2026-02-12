const express = require("express");
const bodyParser = require("body-parser");
const gamesRoutes = require("./routes/games/gamesRoutes.js");
// const adminGamesRoutes = require("./routes/games/gamesAdminRoutes.js");
const saleRoutes = require("./routes/sales/salesRoutes.js");
// const adminSaleRoutes = require("./routes/sales/admin/salesAdminRoutes.js");
const userRoutes = require("./routes/users/userRoutes.js");
// const adminUserRoutes = require("./routes/users/userRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes)
app.use("/api/Lionscrosoft/buy", saleRoutes);
app.use("/api/Lionscrosoft/user", userRoutes);
app.use("/api/Lionscrosoft/game", gamesRoutes);

module.exports = app;