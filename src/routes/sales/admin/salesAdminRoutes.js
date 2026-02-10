const express = require("express");
const router = express.Router();
const {
    getSaleAdmin,
    getSaleByIdAdmin,
} = require("../../../controllers/sales/admin/saleAdminController");

router.get("/", getSaleAdmin);
router.get("/:id", getSaleByIdAdmin);

module.exports = router;