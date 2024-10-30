const mongoose = require("mongoose");

const notebookPageSchema = new mongoose.Schema({
  notebookPageName: {
    type: String,
    default: "My Page",
  },

  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
});

const NotebookPage = mongoose.model("NotebookPage", notebookPageSchema);

module.exports = NotebookPage;
