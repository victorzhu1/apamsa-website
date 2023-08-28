const mongoose = require("mongoose");

const newsletterSubSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
        },
    },
    {
        timestamps: true
    }
);

const NewsletterSub = mongoose.model("NewsletterSub", newsletterSubSchema);

module.exports = NewsletterSub;
