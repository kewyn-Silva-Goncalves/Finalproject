const express = require("express");
const router = express.Router();
const {
    getGames,
    getGamesByName,
    getGamesById,
    createGames,
    updateGames,
    deleteGames,
} = require("../../controllers/games/admin/gamesAdminController");

const auth = require("../../middlewares/authMiddleware");
const isAdmin = require("../../middlewares/adminMiddlewares");

router.get("/", auth, isAdmin, getGames);
router.get("/name/:name", auth, isAdmin, getGamesByName);
router.get("/:id", auth, isAdmin, getGamesById)
router.post("/", isAdmin, createGames);
router.put("/:id", isAdmin, updateGames);
router.delete("/:id", isAdmin, deleteGames);

module.exports = router;