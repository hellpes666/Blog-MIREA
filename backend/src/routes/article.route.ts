import {
	createArticle,
	deleteArticle,
	getArticles,
	updateArticle,
} from "@controllers/articles";
import { getArticle } from "@controllers/articles/getArticle.controller";
import express, { Router } from "express";

export const articleRouter: Router = express.Router();

// add middleware to make sure what user was authorized
articleRouter.get("/", getArticles);

articleRouter.get("/:id", getArticle);

articleRouter.put("/:id", updateArticle);

articleRouter.post("/:id", createArticle);

articleRouter.delete("/:id", deleteArticle);
