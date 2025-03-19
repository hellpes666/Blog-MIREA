import mongoose from "mongoose";
import { handleError } from ".";

export const DbConnect = async () => {
	try {
		if (!process.env.MONGODB_URL) {
			handleError({
				error: "Осутствует переменная локального окружения: process.env.MONGODB_URL",
				componentName: "utils/dbConnect",
			});
		}
		const conn = await mongoose.connect(process.env.MONGODB_URL2 as string);

		console.log("MongoDB connected: " + conn.connection.host);
	} catch (error) {
		handleError({ error, componentName: "utils/dbConnect" });
	}
};
