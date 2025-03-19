import { Request, Response } from "express";

export const getArticle = async (req: Request, res: Response) => {
	try {
		res.send({ message: "Get Article" });
	} catch (error) {}
};
