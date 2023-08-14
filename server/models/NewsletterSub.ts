import mongoose, { Schema, Document } from 'mongoose';

export interface INewsletterSub extends Document {
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const newsletterSubSchema: Schema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        }
    },
    {
        timestamps: true
    }
);

const NewsletterSub = mongoose.model<INewsletterSub>("NewsletterSub", newsletterSubSchema);

module.exports = NewsletterSub;
