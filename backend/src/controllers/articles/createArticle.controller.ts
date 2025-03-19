import { Request, Response } from "express";

export const createArticle = async (req: Request, res: Response) => {
	try {
		res.send({ message: "Create Article" });
	} catch (error) {}
};
