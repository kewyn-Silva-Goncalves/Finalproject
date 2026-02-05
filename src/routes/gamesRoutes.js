const express = require("express");
const router = express.Router();
const {
    getGames,
    createGames,
    getGamesById,
    getGamesByName,
    updateGames,
    deleteGames,
} = require("../controllers/gamesControllers.js");

router.get("/", getGames);
router.get("/:id", getGamesById);
router.get("/:name", getGamesByName);
router.post("/", createGames);
router.put("/:id", updateGames);
router.delete("/:id", deleteGames);

module.exports = router;