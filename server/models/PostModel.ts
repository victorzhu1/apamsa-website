import mongoose, { Schema, Document } from "mongoose";

interface IPost extends Document {
  title: string;
  body: string;
  date: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model<IPost>("Post", postSchema);

module.exports = Post;
