import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "@/db/models/user.model";

@Table({tableName: "refresh_token", underscored: true})
class RefreshToken extends Model {
    @Column(DataType.STRING)
    token!: string;

    @ForeignKey(() => User)
    userId!: number;

    @BelongsTo(() => User)
    user!: User
}

export {RefreshToken}