import {Request, Response, Router} from "express";
import {authenticate, authorize} from "@/middleware/auth";
import RoleEnum from "@/types/enums/role-enum";
import authRouter from "@/routes/auth.route";
import userRouter from "@/routes/user.route";
import documentRoute from "@/routes/document.route";


const router = Router()

router.get("/", authenticate, authorize([RoleEnum.SUPERADMIN]), async (req: Request, res: Response) => {
    return res.sendStatus(200);
})

router.use("/auth", authRouter)
router.use("/user", userRouter)
router.use("/document", documentRoute);

export default router;