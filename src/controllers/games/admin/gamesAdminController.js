const Game = require("../../../models/admin/gamesModel");

const getGames = async (req, res) => {
    try {
        const game = await Game.find();
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createGames = async (req, res) => {
    const game = new Game(req.body)
    try {
        await game.save();
        res.status(201).json(game);
    } catch (error) {
        res.status(400).json({ message: error.message });
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

const updateGames = async (req, res) => {
    try {
        const update = await Game.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(update);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteGames = async (req, res) => {
    try {
        const deleteGame = await Game.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteGame);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getGames,
    createGames,
    getGamesById,
    getGamesByName,
    updateGames,
    deleteGames,
}