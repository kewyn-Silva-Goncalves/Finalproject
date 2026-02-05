const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, trim: true},
        price: {type: Number, required: true},
        licences: {type: Number, required: true, minlength: 2},
        description: {type: String, required: true, trim: true},
        realeasedate: {type: String, required: true, trim: true}
    },
    {
        timestamps: true
    }
);

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;