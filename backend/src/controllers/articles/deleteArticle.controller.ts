import { Request, Response } from "express";

export const deleteArticle = async (req: Request, res: Response) => {
	try {
		res.send({ message: "Delete Article" });
	} catch (error) {}
};
