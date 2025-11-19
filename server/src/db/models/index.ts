import sequelize from "@/config/db.config";
import {User} from "@/db/models/user.model";
import {RefreshToken} from "@/db/models/refresh-token.model";
import {Role} from "@/db/models/role.model";
import {UserRole} from "@/db/models/user-role.model";
import {Document} from "@/db/models/document.model";
import {DocumentUser} from "@/db/models/document-user.model";
import Sequelize from "sequelize";

sequelize.addModels([
    User,
    RefreshToken,
    Role,
    UserRole,
    Document,
    DocumentUser,
])

const db = {
    Sequelize,
    sequelize,
    User,
    RefreshToken,
    Role,
    UserRole,
    Document,
    DocumentUser
}

export default db;