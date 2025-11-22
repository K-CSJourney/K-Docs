import PermissionEnum from "@/types/enums/permission-enum";

interface DocumentUser {
    permission: PermissionEnum;
    userId: number;
    documentId: number;
    createAt: Date;
    updateAt: Date;
    user: {
        email: string;
    }
}

export default DocumentUser;