const User = require("../../../models/admin/adminModel");

const getUser = async (req, res) => {
    try {
        const user = await User.find(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createAdmin = async (req, res) => {
    try {
        const created = await new User(req.body);
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const BanUser = async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: "User not found" })
    }
}

const getUserByName = async (req, res) => {
    try {
        const {name} = req.params;

        const user = await User.find({name});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getUser,
    getUserById,
    BanUser,
    getUserByName,
    createAdmin,
}