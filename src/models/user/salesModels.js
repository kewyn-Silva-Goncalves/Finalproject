const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
    {
        formofpayment: {type: String, required: true, trim: true},
        numberofcard: {type: Number, required: true, minlength: 16},
        nameofthecard: {type: String, required: true, trim: true},
        CPF: {type: Number, required: true, minlength: 11, unique: true},
        installment: {type: Number, required: false},
        billingadress: {type: String, required: true, trim: true}   
    },
    {
        timestamps: true
    }
);

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;