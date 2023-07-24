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
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model("Post", postSchema);

module.exports = Post;