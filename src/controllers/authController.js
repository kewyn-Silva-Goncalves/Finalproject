const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user/userModel");

function signToken(user) {
    return jwt.sign(
        {
            id: user._id, role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || "2h"
        }
    );
}

async function register(req, res) {
    const { name, email, password, dateofbirth, role} = req.body;

    if (!name || !email || !password || !dateofbirth) {
        return res.status(400).json({ message: "name, email, password, date of birth and user Id are required" });
    }

    const exists = await User.findOne({ email: email.toLowerCase().trim() });

    if (exists) {
        return res.status(400).json({ message: "email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = User.create({
        name: name.trim(),
        email: email.toLowerCase(),
        password: hashed,
        dateofbirth: dateofbirth,
        role: role === "admin" ? "admin" : "user"
    });

    const token = signToken(user);

    return res.status(201).json({
        token,
        user: {id: user._id, name: user.name, email: user.email, role: user.role, dateofbirth: user.dateofbirth} 
    });

}

async function login(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "name, email, password and are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
        return res.status(400).json({ message: "invalid email" });
    }

    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
        return res.status(401).json({ message: "incorrect password" });
    }

    const token = signToken(user);

    return res.status(201).json({
        token,
        user: {id: user._id, name: user.name, email: user.email, role: user.role, dateofbirth: user.dateofbirth} 
    });

}

module.exports = { register, login };