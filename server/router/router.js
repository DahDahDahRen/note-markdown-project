const express = require("express");
const getNoteController = require("../controller/getNoteController");
const createNoteController = require("../controller/createNoteController");
const updateNoteController = require("../controller/updateNoteController");
const deleteNoteController = require("../controller/deleteNoteController");
const router = express.Router();

router
  .get("/", getNoteController)
  .post("/", createNoteController)
  .delete("/note/:id", deleteNoteController)
  .patch("/note/:id", updateNoteController);

module.exports = router;
