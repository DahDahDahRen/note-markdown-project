const express = require("express");
const getNoteController = require("../controller/getNoteController");
const createNoteController = require("../controller/createNoteController");
const updateNoteController = require("../controller/updateNoteController");
const deleteNoteController = require("../controller/deleteNoteController");
const newNotebookController = require("../controller/newNotebookController");
const getNotebooksController = require("../controller/getNotebooksController");
const router = express.Router();

router
  .get("/", getNoteController)
  .post("/", createNoteController)
  .delete("/note/:id", deleteNoteController)
  .patch("/note/:id", updateNoteController);

router
  .post("/notebook", newNotebookController)
  .get("/notebook", getNotebooksController);

module.exports = router;
