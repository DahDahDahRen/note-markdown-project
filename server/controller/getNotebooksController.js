const Notebook = require("../model/Notebook");
const asyncHandler = require("../middleware/asyncHandler");
const { createCustomError } = require("../config/customError");

const getNotebookController = asyncHandler(async (req, res, next) => {
  const notebooks = await Notebook.find({});

  if (!notebooks) {
    return next(
      createCustomError(
        404,
        "Something went wrong when fetching the notebooks."
      )
    );
  }

  res.status(202).json({ status: true, notebooks });
});

module.exports = getNotebookController;
