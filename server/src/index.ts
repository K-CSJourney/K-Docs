import dotenv from 'dotenv'
import express, {Express} from "express";
import env from "@/config/env.config";
import db from "@/db/models";
import cors from 'cors';
import router from "@/routes";
import errorHandler from "@/middleware/error-handler";

dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(cors({
    origin: "*",
}))
app.use(router)
app.use(errorHandler)
const port = env.PORT
db.sequelize.sync();

export default app;