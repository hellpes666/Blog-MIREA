import { Request, Response } from "express";
import { handleError } from "src/utils";
import { userLoginSchema } from "./schemas/userLogin.schema";
import User from "@models/User";
import bcrypt from "bcryptjs";
import { generateJWToken } from "src/utils/generateJWToken";

export const login = async (req: Request, res: Response) => {
	try {
		const parsedLoginData = userLoginSchema.parse(req.body);

		const user = await User.findOne({
			email: parsedLoginData.email,
		});

		const PasswordsFromDbAndUserInputIsEqual = await bcrypt.compare(
			parsedLoginData.password,
			user!.password
		);

		if (!user || !PasswordsFromDbAndUserInputIsEqual) {
			res.status(401).json({ message: "Неверные учетные данные." });
		} else {
			generateJWToken({ userId: user._id, res });

			res.status(200).json({
				message: "Авторизация успешна!",
				_id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
			});
		}
	} catch (error) {
		handleError({
			error,
			componentName: "/controllers/auth/login.controller.ts",
		});
		res.status(500).json({
			message:
				"Кажется произошла ошибка на сервере. Пожалуйста, попробуйте снова.",
		});
	}
};
