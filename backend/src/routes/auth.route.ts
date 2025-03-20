import { login } from "@controllers/auth/login.controller";
import { signup } from "@controllers/auth/signup.controller";
import express, { Router } from "express";

export const authRouter: Router = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
