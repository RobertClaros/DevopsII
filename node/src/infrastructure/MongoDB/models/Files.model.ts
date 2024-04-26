import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  parentFolderId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export const FileModel = mongoose.model("File", mySchema);
