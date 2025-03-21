import User from "@models/User";
import { Request, Response } from "express";
import { handleError } from "src/utils";
import bcrypt from "bcryptjs";
import { userSignupSchema } from "./schemas";
import { generateJWToken } from "src/utils/generateJWToken";

export const signup = async (req: Request, res: Response) => {
	try {
		const parsedData = userSignupSchema.parse(req.body);

		const user = await User.exists({
			email: parsedData.email,
		});

		if (user) {
			res.status(400).json({
				message: "Пользователь уже зарегистрирован.",
			});
		} else {
			const salt = await bcrypt.genSalt(15);
			const hashedPassword = await bcrypt.hash(parsedData.password, salt);

			const newUser = await User.create({
				email: parsedData.email,
				firstName: parsedData.firstName,
				lastName: parsedData.lastName,
				password: hashedPassword,
			});

			generateJWToken({ userId: newUser._id, res });

			res.status(201).json({
				message: "Пользователь успешно создан!",
				_id: newUser._id,
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				email: newUser.email,
			});
		}
	} catch (error) {
		handleError({
			error,
			componentName: "controllers/auth/signup.controller.ts",
		});
		res.status(500).json({
			message:
				"Кажется произошла ошибка на сервере. Пожалуйста, попробуйте снова.",
			error: error,
		});
	}
};
