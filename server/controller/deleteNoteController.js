const Note = require("../model/Note");
const asyncHandler = require("../middleware/asyncHandler");
const { createCustomError } = require("../config/customError");

//TODO: Delete Controler
const deleteController = asyncHandler(async (req, res, next) => {
  //* Get the note parameter
  const { id } = req.params;

  //* Find and delete the note
  const note = await Note.findByIdAndDelete(id);

  //* Check if note exist and deleted from DB
  if (!note) {
    return next(
      createCustomError(404, `The note id you give does not exist. ID: ${id}`)
    );
  }

  //* Respond to User
  res.status(202).json({ status: true, id: note._id });
});

module.exports = deleteController;
