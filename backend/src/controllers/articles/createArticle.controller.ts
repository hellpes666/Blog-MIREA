import { IPost, Post } from "@models/Post";
import User, { IUser } from "@models/User";
import { Request, Response } from "express";
import { handleError } from "src/utils";

interface IAuthUser {
	user: Omit<IUser, "password">;
}

interface ICreateRequest extends Request {
	body: IPost;
	user?: IAuthUser;
}

export const createArticle = async (req: ICreateRequest, res: Response) => {
	try {
		const { post } = req.body;

		//@ts-ignore
		const { _id } = req.user;
		const user = await User.findById({ _id });
		if (!user) {
			res.status(401).json({
				message: "Пожалуйста проверьте, что вы были авторизованы.",
			});
		}

		const newPost = new Post({
			creator: user,
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
