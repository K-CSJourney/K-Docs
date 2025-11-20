import http from "http";
import env from "@/config/env.config";
import app from "@/index";

const port = env.PORT

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});