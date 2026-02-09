const express = require("express");
const router = express.Router();
const {
    getUser,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
} = require("../controllers/userControllers");

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;