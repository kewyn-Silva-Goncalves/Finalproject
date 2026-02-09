const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minlength: 2, trim: true},
        CPF: {type: Number, required: true, minlength: 11},
        email: {type: String, required: true, unique: true, lowercase: true, trim: true},
        dateofbirth: {type: String, required: true, trim: true},
        address: {type: String, required: true, minlength: 6, trim: true},
        balance: {type: Number, required: false}
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;