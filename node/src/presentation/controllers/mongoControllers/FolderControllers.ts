import { Request, Response } from "express";
import { IFolderRepository } from "../../../domain/folder/IFolderRepository.ts";
import { FolderService } from "../../../application/folder/FolderService.ts";
import { MongoFolderAdapter } from "../../../infrastructure/MongoDB/adapters/MongoFolderAdapter.ts";

const mongoAdapter: IFolderRepository = new MongoFolderAdapter();
const folderService: FolderService = new FolderService(mongoAdapter);

export const MongoFolderController = {

    listFilesParent: async (req: Request, res: Response) => {
        const parentFolderId = "null";
        try {
            const files = await folderService.listFiles(parentFolderId);
            res.status(200).json(files);
        } catch (error) {
            res.status(500).json({ error: "Error" });
        }
    },

    listFolderParent: async (req: Request, res: Response) => {
        const parentFolderId = "null";
        try {
            const folders = await folderService.listFolders(parentFolderId);
            res.status(200).json(folders);
        } catch (error) {
            res.status(500).json({ error: "Error" });
        }
    },

    listFiles: async (req: Request, res: Response) => {
        const { parentFolderId } = req.params;
        try {
            const files = await folderService.listFiles(parentFolderId);
            res.status(200).json(files);
        } catch (error) {
            res.status(500).json({ error: "Error" });
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
        const { name } = req.body;
        let { parentFolderId } = req.body;
        if (parentFolderId == undefined) {
            parentFolderId = "null";
        }
        try {
            await folderService.createFolder(userId, parentFolderId, name);
            res.status(201).send();
        } catch (error) {
            res.status(500).json({ error: "Error creating folder" });
        }
    }
};
