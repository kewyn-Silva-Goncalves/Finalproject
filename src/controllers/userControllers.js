const User = require("../models/userModel");

const getUser = async (req, res) => {
    try {
        const user = await User.find(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        const created = await new User(req.body);
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(updated);
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    }
}

const deleteUser = async (req, res) => {
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

module.exports = {
    getUser,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
}