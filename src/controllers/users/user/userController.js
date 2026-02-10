const User = require("../../../models/user/userModel");

const getUser = async (req, res) => {
    try {
        const user = await User.find(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message })
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
    getUserByName,
    createUser,
    deleteUser,
    updateUser,
}