import { Request, Response } from "express";
import { IFolderRepository } from "../../../domain/folder/IFolderRepository.ts";
import { FolderService } from "../../../application/folder/FolderService.ts";
import { GoogleFolderAdapter } from "../../../infrastructure/GoogleDrive/GoogleFolderAdapter.ts";

const googleAdapter: IFolderRepository = new GoogleFolderAdapter();
const folderService: FolderService = new FolderService(googleAdapter);

export const GoogleFolderController = {

    listFiles: async (req: Request, res: Response) => {
        const { parentFolderId } = req.params;
        try {
            const folders = await folderService.listFiles(parentFolderId);
            res.status(200).json(folders);
        } catch (error) {
            res.status(500).json({ error: "Error creating file" });
        }
    },

    listFolders: async (req: Request, res: Response) => {
        const { parentFolderId } = req.params;
        try {
            const folders = await folderService.listFolders(parentFolderId);
            res.status(200).json(folders);
        } catch (error) {
            res.status(500).json({ error: "Error creating file" });
        }
    },

    createFolder: async (req: Request, res: Response) => {
        const userId = "123456789";
        const { parentFolderId, name } = req.body;
        try {
            await folderService.createFolder(userId, parentFolderId, name);
            res.status(201).send();
        } catch (error) {
            res.status(500).json({ error: "Error creating folder" });
        }
    }
};
