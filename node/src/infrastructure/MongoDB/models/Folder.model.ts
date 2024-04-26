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
});

export const FolderModel = mongoose.model("Folder", mySchema);
