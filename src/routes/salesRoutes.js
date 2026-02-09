const express = require("express");
const router = express.Router();
const {
    getSale,
    getSaleById,
    createSale,
    reimbursementSale,
} = require("../controllers/salesControllers");

router.get("/", getSale);
router.get("/:id", getSaleById);
router.post("/", createSale);
router.delete("/:id", reimbursementSale);

module.exports = router;