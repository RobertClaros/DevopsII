import { Router } from "express";
import { MongoFileController } from "../../controllers/mongoControllers/FileControllers.ts";

const mongoFileRouter = Router();

mongoFileRouter.post("/files", MongoFileController.saveFile);

export default mongoFileRouter;