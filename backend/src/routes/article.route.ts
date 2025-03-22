import {
	createArticle,
	deleteArticle,
	getArticles,
	updateArticle,
} from "@controllers/articles";
import { getArticle } from "@controllers/articles/getArticle.controller";
import { ensureAuthUserMiddleware } from "@middleware/ensureAuthUser.middleware";
import express, { Router } from "express";

export const articleRouter: Router = express.Router();

articleRouter.get("", getArticles);

articleRouter.get("/:id", ensureAuthUserMiddleware, getArticle);

articleRouter.put("/:id", ensureAuthUserMiddleware, updateArticle);

articleRouter.post("", ensureAuthUserMiddleware, createArticle);

articleRouter.delete("/:id", ensureAuthUserMiddleware, deleteArticle);
