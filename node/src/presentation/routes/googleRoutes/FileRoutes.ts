import { Router } from "express";
import { GoogleFileController } from "../../controllers/googleControllers/FileControllers.ts";

const googleFileRouter = Router();

googleFileRouter.post("/files", GoogleFileController.saveFile);
googleFileRouter.get("/files/getdata/:fileId", GoogleFileController.getData);

export default googleFileRouter;
