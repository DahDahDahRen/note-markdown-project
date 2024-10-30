const Notebook = require("../model/Notebook");
const asyncHandler = require("../middleware/asyncHandler");
const { createCustomError } = require("../config/customError");

const newNotebookController = asyncHandler(async (req, res, next) => {
  //* Get Notebook name
  const { notebookName } = req.body;

  //* Create new Notebook
  const notebook = await Notebook.create({ notebookName });

  //* Check newly created notebook
  if (!notebook) {
    return next(
      createCustomError(
        404,
        "Something went wrong when creating your notebook!"
      )
    );
  }

  res.status(202).json({ status: true, notebook });
});

module.exports = newNotebookController;
