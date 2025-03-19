declare namespace NodeJS {
	interface ProcessEnv {
		PORT: string;
		MONGOOSE_URL: string;
		MONGODB_URL: string;
		JWT_SECRET: string;
	}
}
