const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Enter post title:"],
        },
        body: {
            type: String,
            required: [true, "Enter post body:"],
        },
        date: {
            type: String,
            required: [true, "Enter post date:"],
        }
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model("Post", postSchema);

module.exports = Post;