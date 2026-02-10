const express = require("express");
const router = express.Router();
const {
    getSale,
    createSale,
    reimbursementSale,
} = require("../../../controllers/sales/user/saleUserController");

router.get("/", getSale);
router.post("/:id/", createSale);
router.delete("/:id", reimbursementSale);

module.exports = router;