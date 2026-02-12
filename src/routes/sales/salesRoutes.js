const express = require("express");
const router = express.Router();
const {
    getSale,
    createSale,
    reimbursementSale,
} = require("../../controllers/sales/user/saleUserController");
const {
    getSaleByIdAdmin
} = require("../../controllers/sales/admin/saleAdminController");

const auth = require("../../middlewares/authMiddleware");
const isAdmin = require("../../middlewares/adminMiddlewares");

router.get("/", auth, isAdmin,getSale);
router.get("/:id", auth, isAdmin, getSaleByIdAdmin);
router.post("/:id/", auth, createSale);
router.delete("/:id", auth, reimbursementSale);

module.exports = router;