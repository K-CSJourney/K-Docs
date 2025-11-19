import {BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import PermissionEnum from "@/types/enums/permission-enum";
import {User} from "@/db/models/user.model";
import {Document} from "@/db/models/document.model";

@Table({tableName: "document_user", underscored: true})
class DocumentUser extends Model {
    @Column(DataType.ENUM("EDIT", "VIEW"))
    permission!: PermissionEnum;

    @BelongsTo(() => User)
    user!: User;

    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    userId!: number;

    @BelongsTo(() => Document)
    document!: Document;

    @ForeignKey(() => Document)
    @PrimaryKey
    @Column
    documentId!: number;
}

export {DocumentUser}