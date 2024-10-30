const Note = require("../model/Note");
const asyncHandler = require("../middleware/asyncHandler");
const { createCustomError } = require("../config/customError");

//TODO: Update Note
const updateController = asyncHandler(async (req, res, next) => {
  //* Get ID, title, and body
  const { title, body } = req.body;
  const { id } = req.params;

  //* Update Note
  const note = await Note.findByIdAndUpdate(id, { title, body }, { new: true });

  //* Check if note exist
  if (!note) {
    return next(
      createCustomError(404, `The note id you give does not exist. ID: ${id}`)
    );
  }

  res.status(202).json({ status: true, note });
});

module.exports = updateController;
