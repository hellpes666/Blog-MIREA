import { Response } from "express";
import jwt from "jsonwebtoken";
import { handleError } from "./handleError";

interface IGenerateTokenJWTParams {
	userId: string;
	res: Response;
}

export const generateJWToken = ({ userId, res }: IGenerateTokenJWTParams) => {
	if (!process.env.JWT_SECRET) {
		handleError({
			error: "process.env.JWT_SECRET отуствует",
			componentName: "utils/generateJWToken.ts",
		});
	}
	const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
		expiresIn: "1d",
	});

	res.cookie("jwt", token, {
		maxAge: 24 * 60 * 60 * 1000,
		httpOnly: true, // защищает от XSS
		sameSite: "strict", // защищает от CSRF
	});

	return token;
};
