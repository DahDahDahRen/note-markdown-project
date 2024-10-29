const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      default: "This is your note!",
      type: String,
      requied: true,
    },
    body: {
      default: "Start writing your note.",
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
