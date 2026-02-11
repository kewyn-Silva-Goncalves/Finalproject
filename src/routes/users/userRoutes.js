const express = require("express");
const router = express.Router();
const {
    getUser,
    createUser,
    getUserByName,
    deleteUser,
    updateUser,
} = require("../../controllers/users/user/userController");

const { getUserById } = require("../../controllers/users/admin/userAdminController")

const auth = require("../../middlewares/authMiddleware");
const isAdmin = require("../../middlewares/adminMiddlewares");

router.get("/", auth, isAdmin,getUser);
router.get("/:id", isAdmin, getUserById);
router.get("/name/:name", auth, isAdmin,getUserByName);
router.post("/", auth, isAdmin, createUser);
router.put("/:id", auth, isAdmin, updateUser);
router.delete("/:id", auth, isAdmin, deleteUser);

module.exports = router;