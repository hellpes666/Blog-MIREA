import mongoose, { Document, Schema } from "mongoose";

export interface IPost {
	creator: mongoose.Schema.Types.ObjectId;

	post: {
		title: string;
		themes: string[];
		description: string;
	};

	createdAt?: Date;
	updatedAt?: Date;
}

interface PostSchema extends IPost, Document {}

const postSchema = new Schema<PostSchema>(
	{
		creator: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},

		post: {
			title: {
				type: String,
				required: true,
				minLength: 6,
				maxLength: 256,
			},
			themes: {
				type: [String],
				required: true,
				minLength: 1,
				maxLength: 12,
			},
			description: { type: String, required: true, minLength: 250 },
		},
	},
	{ timestamps: true }
);

export const Post = mongoose.model<IPost>("Post", postSchema);
