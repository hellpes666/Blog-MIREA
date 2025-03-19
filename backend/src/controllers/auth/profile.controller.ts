import { Request, Response } from "express";

export const profile = async (req: Request, res: Response) => {
	try {
		res.send({ message: "profile" });
	} catch (error) {}
};
