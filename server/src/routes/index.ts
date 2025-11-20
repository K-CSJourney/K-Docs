import {Router, Request, Response} from "express";
import {authenticate, authorize} from "@/middleware/auth";
import RoleEnum from "@/types/enums/role-enum";
import authRouter from "@/routes/auth.route";


const router = Router()

router.get("/", authenticate, authorize([RoleEnum.SUPERADMIN]), async (req: Request, res: Response) => {
    return res.sendStatus(200);
})

router.use("/auth", authRouter)

export default router;