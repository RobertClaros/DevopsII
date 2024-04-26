import { Request, Response } from "express";
import { GoogleFileAdapter } from "../../../infrastructure/GoogleDrive/GoogleFileAdapter.ts";
import { IGoogleRepository } from "../../../domain/google/IGoogleRepository.ts";
import { GoogleService } from "../../../application/google/GoogleService.ts";

const googleAdapter: IGoogleRepository = new GoogleFileAdapter();
const fileService: GoogleService = new GoogleService(googleAdapter);

export const GoogleFileController = {

    saveFile: async (req: Request, res: Response) => {
        const userId = "123456789";
        const { parentFolderId, name, content } = req.body;
        try {
            await fileService.saveFile(userId, parentFolderId, name, content);
            res.status(201).send();
        } catch (error) {
            res.status(500).json({ error: "Error saving file into Google Drive" });
        }
    },

    getData: async (req: Request, res: Response) => {
        const { fileId } = req.params;
        try {
            const data = await fileService.getData(fileId);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: "Error getting data from Google Drive" });
        }
    }
};
