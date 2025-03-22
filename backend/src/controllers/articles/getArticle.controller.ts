import { Post } from "@models/Post";
import { Request, Response } from "express";
import { handleError } from "src/utils";

export const getArticle = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const post = await Post.findById({
			_id: id,
		});

		if (post === null) {
			throw new Error("Такой статьи нет");
		}

		res.status(200).json({ data: post });
	} catch (error) {
		handleError({
			error,
			componentName: "/controllers/articles/getArticle",
		});
		res.status(500).send({
			message:
				"Кажется произошла ошибка на сервере. Пожалуйста, попробуйте снова.",
		});
	}
};
