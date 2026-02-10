const express = require("express");
const router = express.Router();
const {
    getUser,
    getUserByName,
    getUserById,
    BanUser,
    createAdmin
} = require("../../../controllers/users/admin/userAdminController");

router.get("/", getUser);
router.get("/name/:name", getUserByName);
router.get("/:id", getUserById);
router.post("/", createAdmin);
router.delete("/:id", BanUser);

module.exports = router;