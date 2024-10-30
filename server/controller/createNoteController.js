const Note = require("../model/Note");
const asyncHandler = require("../middleware/asyncHandler");
const { createCustomError } = require("../config/customError");

//TODO: Create new note
const createNoteController = asyncHandler(async (req, res, next) => {
  //* Get Input from user
  const { title, body } = req.body;

  //* Check if Input is empty
  if (!title || !body) {
    return next(createCustomError(404, "Title or body content is missing!"));
  }

  //* Create and save new note
  const note = await Note.create({ title, body });

  //* Check if note is created
  if (!note) {
    return next(
      createCustomError(404, "Something went wronng, when create new note!")
    );
  }

  //* Return the newly create note
  res.status(202).json({ status: true, note: note });
});

module.exports = createNoteController;
