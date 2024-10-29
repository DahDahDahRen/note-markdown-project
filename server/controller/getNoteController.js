const Note = require("../model/Note");
const asyncHandler = require("../middleware/asyncHandler");
const { createCustomError } = require("../config/customError");

//TODO: Get Controller
const getNoteController = asyncHandler(async (req, res, next) => {
  const notes = await Note.find({});

  if (!notes) {
    return next(createCustomError(404, "You do not have any note!"));
  }

  res.status(202).json({ notes });
});

module.exports = getNoteController;
