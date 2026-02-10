const express = require("express");
const router = express.Router();
const {
    getGames,
    getGamesByName,
    getGamesById,
    createGames,
    updateGames,
    deleteGames,
} = require("../../../controllers/games/admin/gamesAdminController");

router.get("/", getGames);
router.get("/:id", getGamesById)
router.get("/name/:name", getGamesByName);
router.post("/", createGames);
router.put("/:id", updateGames);
router.delete("/:id", deleteGames);

module.exports = router;