import { IPost, Post } from "@models/Post";
import User, { IUser } from "@models/User";
import { Request, Response } from "express";
import { handleError } from "src/utils";

interface ICreateRequest extends Request {
	body: IPost;
}

export const createArticle = async (req: ICreateRequest, res: Response) => {
	try {
		const { post } = req.body;

		//@ts-ignore
		const { _id } = req.user;
		const userData = await User.findById({ _id })
			.select("-password")
			.select("-createdAt")
			.select("-updatedAt")
			.select("--email");
		if (!userData) {
			res.status(401).json({
				message: "Пожалуйста проверьте, что вы были авторизованы.",
			});
		}
		//@ts-ignore
		post.user = userData;

		const newPost = new Post({
			post,
		});
		await newPost.save(); // save in DB

		res.status(201).json({ newPost });
	} catch (error) {
		handleError({
			error,
			componentName: "controllers/articles/createArticle.controller.ts",
		});
		res.status(500).send({
			message:
				"Кажется произошла ошибка на сервере. Пожалуйста, попробуйте снова.",
		});
	}
};
