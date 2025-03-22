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
			userData: {
				firstName: {
					type: String,
					required: true,
				},
				lastName: {
					type: String,
					required: true,
				},
			},
		},

		post: {
			title: {
				type: String,
				required: true,
				minlength: 6,
				maxlength: 256,
			},
			themes: {
				type: [String],
				required: true,
				minlength: 1,
				maxlength: 12,
			},
			description: { type: String, required: true, minlength: 250 },
		},
	},
	{ timestamps: true }
);

export const Post = mongoose.model<IPost>("Post", postSchema);
