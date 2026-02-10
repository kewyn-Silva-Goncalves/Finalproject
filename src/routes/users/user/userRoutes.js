const express = require("express");
const router = express.Router();
const {
    getUser,
    createUser,
    getUserByName,
    deleteUser,
    updateUser,
} = require("../../../controllers/users/user/userController");

router.get("/", getUser);
router.get("/:id", getUserByName);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;