import { Request, Response } from "express";

export const getArticles = async (req: Request, res: Response) => {
	try {
		res.send({ message: "Ты крут" });
	} catch (error) {}
};
