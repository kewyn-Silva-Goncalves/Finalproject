const Sale = require("../../../models/user/salesModels")
const User = require("../../../models/user/userModel");
const Game = require("../../../models/admin/gamesModel");

const getSale = async (req, res) => {
    try {
        const sale = await Sale.find();
        rs.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createSale = async (req, res) => {
    const userId = req.user.id;
    const { game } = req.body;
    try {
        const created = await Sale.create({
            customerId: userId,
            game: { game }
        });
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const reimbursementSale = async (req, res) => {
    try {
        const sale = await findByIdAndDelete(req.params.id);
        res.status(200).json(sale);
    } catch (error) {
        res.status(404).json({ message: "Sale not found" });
    }
}

module.exports = {
    getSale,
    createSale,
    reimbursementSale,
}