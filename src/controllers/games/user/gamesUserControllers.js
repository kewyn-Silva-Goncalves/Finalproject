const Game = require("../../../models/user/gamesModel");

const getGames = async (req, res) => {
    try {
        const game = await Game.find();
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getGamesById = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        res.status(200).json(game);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getGamesByName = async (req, res) => {
    try {
        const {name} = req.params;

        const game = await Game.find({name});
        res.status(200).json(game);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getGames,
    getGamesById,
    getGamesByName,
}