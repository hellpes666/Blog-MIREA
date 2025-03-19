import { Request, Response } from "express";

export const updateArticle = async (req: Request, res: Response) => {
	try {
		res.send({ message: "Update Article" });
	} catch (error) {}
};
