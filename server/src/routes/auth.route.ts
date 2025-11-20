import {Router} from "express";
import {authValidator} from "@/validators/auth.validator";
import {authenticate} from "@/middleware/auth";
import authController from "@/controller/auth/auth.controller";

const authRouter = Router()

authRouter.post("/login", authValidator.login, authController.login);

authRouter.post("/refresh-token", authValidator.refreshToken, authController.refreshToken);

authRouter.delete("/logout", authenticate, authController.logout)

export default authRouter;