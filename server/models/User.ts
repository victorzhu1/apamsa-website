import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
}

const userSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        }
    }
);

const User = mongoose.model<IUser>("User", userSchema);

module.exports = User;
