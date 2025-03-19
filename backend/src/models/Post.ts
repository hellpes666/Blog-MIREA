import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
	creator: { type: typeof Schema.Types; ref: string };

	post: {
		title: string;
		themes: string[];
		description: string;
	};

	createdAt?: Date;
	updatedAt?: Date;
}

const postSchema = new Schema<IPost>(
	{
		creator: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},

		post: {
			title: {
				type: String,
				require: true,
				minLength: 6,
				maxLength: 256,
			},
			themes: {
				type: [String],
				require: true,
				minLength: 1,
				maxLength: 12,
			},
			description: { type: String, require: true, minLength: 250 },
		},
	},
	{ timestamps: true }
);

export const Post = mongoose.model<IPost>("Post", postSchema);
