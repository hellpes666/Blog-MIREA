import { Request, Response } from "express";

export const getArticles = async (req: Request, res: Response) => {
	try {
		res.send({ message: "Get Articles" });
	} catch (error) {}
};
