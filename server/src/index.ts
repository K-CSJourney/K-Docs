import dotenv from 'dotenv'
import express, {Express, Request, Response} from "express";
import env from "@/config/env.config";
import db from "@/db/models";

dotenv.config()

const app: Express = express()
app.use(express.json())
const port = env.PORT
db.sequelize.sync();
app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server")
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})