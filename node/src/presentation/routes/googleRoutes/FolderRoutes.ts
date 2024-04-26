import { Router } from "express";
import { GoogleFolderController } from "../../controllers/googleControllers/FolderControllers.ts";

const googleFolderRouter = Router();

googleFolderRouter.get("/files/:parentFolderId", GoogleFolderController.listFiles);

googleFolderRouter.get("/folders/:parentFolderId", GoogleFolderController.listFolders);

googleFolderRouter.post("/folders", GoogleFolderController.createFolder);

export default googleFolderRouter;
