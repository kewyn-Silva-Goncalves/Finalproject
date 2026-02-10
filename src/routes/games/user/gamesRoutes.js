const express = require("express");
const router = express.Router();
const {
    getGames,
    getGamesByName,
} = require("../../../controllers/games/user/gamesUserControllers");

router.get("/", getGames);
router.get("/name/:name", getGamesByName);

module.exports = router;