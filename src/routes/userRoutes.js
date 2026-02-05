const express = require("express");
const router = express.Router();
const {
    getUser,
} = require("../controllers/userControllers");

router.get("/", getUser);
// router.get("/:id");
// router.post("/");
// router.put("/:id");
// router.delete("/:id");

module.exports = router;