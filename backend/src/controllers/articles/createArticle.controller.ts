import { IPost, Post } from "@models/Post";
import User from "@models/User";
import { Request, Response } from "express";
import { handleError } from "src/utils";

interface ICreateRequest extends Request {
	body: IPost;
}

export const createArticle = async (req: ICreateRequest, res: Response) => {
	try {
		const { creator, post } = req.body;
		const user = await User.findById({ creator });
		if (!user) {
			res.status(401).json({
				message: "Пожалуйста проверьте, что вы были авторизованы.",
			});
		}

		const newPost = new Post({
			creator,
			post,
		});

		await newPost.save(); // save in DB
		res.status(201).json(newPost);
	} catch (error) {
		handleError({
			error,
			componentName: "controllers/articles/createArticle.controller.ts",
		});
		res.status(500).send({
			message: "Кажется, проблема на сервере. Мы уже решаем этот вопрос!",
		});
	}
};
