import mongoose, { Document, Schema } from "mongoose";
import { Counter } from "./Counter";

export interface IPost {
	creator: mongoose.Schema.Types.ObjectId;
	_id: number;
	post: {
		title: string;
		themes: string[];
		description: string;
		user: {
			firstName: string;
			lastName: string;
		};
	};

	createdAt?: Date;
	updatedAt?: Date;
}

const postSchema = new Schema<IPost>(
	{
		_id: Number,

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
			user: {
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
	},
	{ timestamps: true }
);

postSchema.pre("save", async function () {
	if (this.isNew) {
		const counter = await Counter.findOneAndUpdate(
			{ _id: "_id" },
			{ $inc: { seq: 1 } },
			{ new: true, upsert: true }
		);
		//@ts-ignore
		this._id = counter.seq;
	}
});

export const Post = mongoose.model<IPost>("Post", postSchema);
