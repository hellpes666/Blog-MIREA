import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
	try {
		res.send({ message: "login" });
	} catch (error) {}
};
