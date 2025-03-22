import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
	_id: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string;

	createdAt?: Date;
	updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 8,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
