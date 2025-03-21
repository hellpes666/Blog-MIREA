import { ICustomRequest } from "@middleware/ensureAuthUser.middleware";
import { Response } from "express";
import { handleError } from "src/utils";

export const checkAuth = (req: ICustomRequest, res: Response) => {
	try {
		res.status(200).json(req.user);
	} catch (error) {
		handleError({ error, componentName: "Ошибка в checkAuth controller" });
	}
};
