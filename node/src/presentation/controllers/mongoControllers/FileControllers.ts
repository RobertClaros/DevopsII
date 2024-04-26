import { Request, Response } from "express";
import { IFileRepository } from "../../../domain/file/IFIleRepository.ts";
import { FileService } from "../../../application/file/FileService.ts";
import { MongoFileAdapter } from "../../../infrastructure/MongoDB/adapters/MongoFileAdapter.ts";

const mongoAdapter: IFileRepository = new MongoFileAdapter();
const fileService: FileService = new FileService(mongoAdapter);

export const MongoFileController = {

    saveFile: async (req: Request, res: Response) => {
        const userId = "123456789";
        let { parentFolderId } = req.body;
        const { name, content } = req.body;
        if (parentFolderId == undefined) {
            parentFolderId = "null";
        }
        try {
            await fileService.saveFile(userId, parentFolderId, name, content);
            res.status(201).send();
        } catch (error) {
            res.status(500).json({ error: "Error saving file" });
        }
    }
};
