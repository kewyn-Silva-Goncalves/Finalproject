const express = require("express");
const router = express.Router();
const {

} = require("../models/userModel");

router.get("/");
router.get("/:id");
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;