import { IPost, Post } from "@models/Post";
import { Request, Response } from "express";
import { handleError } from "src/utils";

export const updateArticle = async (req: Request, res: Response) => {
	try {
		const { title, themes, description } = req.body;
		const { id } = req.params;
		const post = await Post.findById({ _id: id });

		if (!post) {
			throw Error("Такого поста не существует.");
		}

		const changed = await Post.findByIdAndUpdate(
			{
				_id: id,
			},
			{ "title": title, themes, description }
		);
		res.status(200).json({ message: "Статья успешно иименена", changed});
	} catch (error) {
		handleError({
			error,
			componentName: "controllers/articles/updateArticle.controller.ts",
		});
		res.status(500).json({
			message:
				"Кажется произошла ошибка на сервере. Пожалуйста, попробуйте снова.",
			error: error,
		});
	}
};
