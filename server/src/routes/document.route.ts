import {Router} from "express";
import {authenticate} from "@/middleware/auth";
import {shareValidator} from "@/validators/share.validator";
import {shareController} from "@/controller/document/share/share.controller";
import {documentValidator} from "@/validators/document.validator";
import {documentController} from "@/controller/document/document.controller";

const documentRoute = Router();

documentRoute.get("/:id", authenticate, documentController.getOne);

documentRoute.get("/", authenticate, documentController.getAll);
documentRoute.put(
    "/:id",
    authenticate,
    documentValidator.update,
    documentController.update
);

documentRoute.post("/", authenticate, documentController.create);
documentRoute.delete("/:id", authenticate, documentController.delete);

documentRoute.post(
    "/:id/share",
    authenticate,
    shareValidator.create,
    shareController.create
);

documentRoute.delete(
    "/:documentId/share/:userId",
    authenticate,
    shareController.delete
);

export default documentRoute;