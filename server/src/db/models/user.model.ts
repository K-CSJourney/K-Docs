import {BelongsToMany, Column, DataType, HasMany, Model, Scopes, Table} from "sequelize-typescript";
import {RefreshToken} from "@/db/models/refresh-token.model";
import {Role} from "@/db/models/role.model";
import {UserRole} from "@/db/models/user-role.model";
import {DocumentUser} from "@/db/models/document-user.model";

@Scopes(() => ({
    withRoles: {
        include: [
            {
                model: UserRole,
                attributes: ['createAt', 'updateAt'],
                include: [Role]
            }
        ]
    }
}))

@Table({tableName: "user", underscored: true})
class User extends Model {
    @Column(DataType.STRING)
    email!: string;

    @Column(DataType.STRING)
    password!: string;

    @Column(DataType.BOOLEAN)
    isVerified!: boolean;

    @Column(DataType.STRING)
    verificationToken!: string;

    @Column(DataType.STRING)
    passwordResetToken!: string;

    @HasMany(() => RefreshToken, {onDelete: "CASCADE"})
    refreshTokens!: Array<RefreshToken>

    @BelongsToMany(() => Role, {
        through: {
            model: () => UserRole,
        }
    })
    roles!: Array<Role>;

    @HasMany(() => UserRole, {onDelete: "CASCADE"})
    userRoles!: Array<UserRole>;

    @HasMany(() => DocumentUser, {onDelete: "CASCADE"})
    shareDocuments!: Array<DocumentUser>
}

export {User}
