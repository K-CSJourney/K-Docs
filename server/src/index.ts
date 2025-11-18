import dotenv from 'dotenv'
import express, {Express, Request, Response} from "express";

dotenv.config()

const app: Express = express()
const port = 8080

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server")
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})