import { Router } from "express";
import { MongoFolderController } from "../../controllers/mongoControllers/FolderControllers.ts";

const mongoFolderRouter = Router();

mongoFolderRouter.get("/files/null", MongoFolderController.listFilesParent);

mongoFolderRouter.get("/files/:parentFolderId", MongoFolderController.listFiles);

mongoFolderRouter.get("/folders/null", MongoFolderController.listFolderParent);

mongoFolderRouter.get("/folders/:parentFolderId", MongoFolderController.listFolders);

mongoFolderRouter.post("/folders", MongoFolderController.createFolder);

export default mongoFolderRouter;