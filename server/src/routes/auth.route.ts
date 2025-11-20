import {Router} from "express";
import {authValidator} from "@/validators/auth.validator";
import authController from "@/controller/auth.controller";
import {authenticate} from "@/middleware/auth";

const authRouter = Router()

authRouter.post("/login", authValidator.login, authController.login);

authRouter.post("/refresh-token", authValidator.refreshToken, authController.refreshToken);

authRouter.delete("/logout", authenticate, authController.logout)

export default authRouter;