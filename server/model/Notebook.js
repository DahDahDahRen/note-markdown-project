const mongoose = require("mongoose");

const notebookSchema = new mongoose.Schema({
  notebookName: {
    type: String,
    default: "My Notebook",
  },

  notebookPages: [
    { type: mongoose.Schema.Types.ObjectId, ref: "NotebookPage" },
  ],
});

const Notebook = mongoose.model("Notebook", notebookSchema);

module.exports = Notebook;
