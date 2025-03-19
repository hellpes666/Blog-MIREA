import { Request, Response } from "express";

export const logout = async (req: Request, res: Response) => {
	try {
		res.send({ message: "logout" });
	} catch (error) {}
};
