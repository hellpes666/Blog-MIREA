import { signup, login, logout, checkAuth } from "@controllers/auth";
import { ensureAuthUserMiddleware } from "@middleware/ensureAuthUser.middleware";
import express, { Router } from "express";

export const authRouter: Router = express.Router();

//TODO двухфакторку сделать

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/user", ensureAuthUserMiddleware, checkAuth);
