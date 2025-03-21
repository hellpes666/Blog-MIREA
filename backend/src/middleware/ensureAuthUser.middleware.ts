import { NextFunction, Request, Response } from "express";
import { handleError } from "src/utils";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "@models/User";

export interface ICustomRequest extends Request {
	user?: InstanceType<typeof User>;
}

export const ensureAuthUserMiddleware = async (
	req: ICustomRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.cookies.jwt;

		if (!token) {
			res.status(401).json({
				message: "Вы не авторизованы. No Token Provided.",
			});
		}

		const decoded = jwt.verify(
			token,
			process.env.JWT_SECRET!
		) as JwtPayload & { userId: string };

		if (!decoded || !decoded.userId) {
			res.status(401).json({ message: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			res.status(401).json({ message: "Пользователь не найден" });
		}

		//@ts-ignore
		req.user = user;

		next();
	} catch (error) {
		handleError({error,  componentName: "Ошибка в protectRoute middleware"});
	}
};
