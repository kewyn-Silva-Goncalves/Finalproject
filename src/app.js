const express = require("express");
const bodyParser = require("body-parser");
const gamesRoutes = require("./routes/games/user/gamesRoutes.js");
const adminGamesRoutes = require("./routes/games/admin/gamesAdminRoutes.js");
const saleRoutes = require("./routes/sales/user/salesRoutes.js");
const adminSaleRoutes = require("./routes/sales/admin/salesAdminRoutes.js");
const userRoutes = require("./routes/users/user/userRoutes.js");
const adminUserRoutes = require("./routes/users/user/userRoutes.js");


const app = express();

app.use(bodyParser.json());

app.use("/api/Lionscrosoft/sale", saleRoutes);
app.use("/api/Lionscrosoft/user", userRoutes);
app.use("/api/Lionscrosoft/game", gamesRoutes);
app.use("/api/admin/Lionscrosoft/sale", adminSaleRoutes);
app.use("/api/admin/Lionscrosoft/user", adminUserRoutes);
app.use("/api/admin/Lionscrosoft/game", adminGamesRoutes);

module.exports = app;