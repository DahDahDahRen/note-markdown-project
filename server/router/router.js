const express = require("express");
const getNoteController = require("../controller/getNoteController");
const errorHandler = require("../middleware/errorHandler");
const router = express.Router();

router.get("/", getNoteController);

module.exports = router;
