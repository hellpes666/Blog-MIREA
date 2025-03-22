import { Post } from "@models/Post";
import { Request, Response } from "express";
import { handleError } from "src/utils";

export const getArticles = async (req: Request, res: Response) => {
	try {
		//TODO: Pagination

		const allPosts = await Post.find({});

		res.status(200).json({ allPosts });
	} catch (error) {
		handleError({
			error,
			componentName: "/controllers/articles/getArticles",
		});
		res.status(500).send({
			message:
				"Кажется произошла ошибка на сервере. Пожалуйста, попробуйте снова.",
		});
	}
};
