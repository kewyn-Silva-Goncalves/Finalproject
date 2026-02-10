const Sale = require("../../../models/user/salesModels");

const getSaleAdmin = async (req, res) => {
    try {
        const sale = await Sale.find(req.body);
        rs.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSaleByIdAdmin = async (req, res) => {
    try {
        const sale = await Sale.findById(req.params.id);
        res.status(200).json(sale);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getSaleAdmin,
    getSaleByIdAdmin,
}