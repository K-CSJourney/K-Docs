import env from "@/config/env.config";
import {Sequelize} from "sequelize-typescript";

const sequelize
    = env.NODE_ENV === "test" || env.NODE_ENV === "development" ? new Sequelize(env.DATABASE!, "root", env.PASSWORD!, {
    host: env.DB_HOST,
    dialect: "postgres",
    logging: false,
}) : new Sequelize(env.DATABASE_URL!, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false,
})

export default sequelize;