import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { articleRouter } from "@routes/article.route";
import { DbConnect } from "./utils";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { authRouter } from "@routes/auth.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.use("/api/articles", articleRouter);

app.use("/api/auth", authRouter);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
	DbConnect();
});
