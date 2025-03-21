import { Request, Response } from "express";
import { handleError } from "src/utils";

export const logout = async (req: Request, res: Response) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });

		res.status(200).json({
			message: "Вы успешно вышли из акаунта. Будем ждать вас снова!",
		});
	} catch (error) {
		handleError({
			error,
			componentName: "/controllers/auth/logout.controller.ts",
		});
		res.status(500).json({
			message:
				"Кажется произошла ошибка на сервере. Пожалуйста, попробуйте снова.",
		});
	}
};
