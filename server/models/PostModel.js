const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        body: {
          type: String,
          required: [true, "Body is required"],
        },
        date: {
          type: String,
          required: [true, "Date is required"],
        },
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

