import { getArticles } from "@controllers/articles/getArticle.controller";
import express, { Router } from "express";

export const articleRouter: Router = express.Router();

// add middleware to make sure what user was authorized
articleRouter.get("/", getArticles);
