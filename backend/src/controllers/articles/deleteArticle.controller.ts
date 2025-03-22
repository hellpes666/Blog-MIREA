import { Post } from "@models/Post";
import { Request, Response } from "express";
import { handleError } from "src/utils";

export const deleteArticle = async (req: Request, res: Response) => {
	try {
		//@ts-ignore
		const { id } = req.params.id;

		await Post.findByIdAndDelete({
			_id: id,
		});

		res.status(200).json({ message: "Статья успешно удаления" });
	} catch (error) {
		handleError({
			error,
			componentName: "Ошибка в /controllers/articles/deleteArticle",
		});
		res.status(500).send({
			message:
				"Кажется произошла ошибка на сервере. Пожалуйста, попробуйте снова.",
		});
	}
};
