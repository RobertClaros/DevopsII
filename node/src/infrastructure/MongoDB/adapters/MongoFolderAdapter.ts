import { IFolderRepository } from "../../../domain/folder/IFolderRepository.ts";
import { FolderModel } from "../models/Folder.model.ts";
import { FileModel } from "../models/Files.model.ts";
export class MongoFolderAdapter implements IFolderRepository {
  async listFiles(parentFolderId: string): Promise<object[]> {
    const filesData = await FileModel.find({ parentFolderId });
    const files = filesData.map((file) => ({
      _id: file._id.toString(),
      userId: file.userId,
      parentFolderId: file.parentFolderId,
      name: file.name,
      content: file.content,
    }));
    return files;
  }
  async listFolders(parentFolderId: string): Promise<object[]> {
    const foldersData = await FolderModel.find({ parentFolderId });
    const folders = foldersData.map((folder) => ({
      _id: folder._id.toString(),
      userId: folder.userId,
      parentFolderId: folder.parentFolderId,
      name: folder.name,
    }));
    return folders;
  }

  async createFolder(
    userId: string,
    parentFolderId: string,
    name: string
  ): Promise<void> {
    const newFolder = new FolderModel({ userId, parentFolderId, name });
    newFolder.save();
  }
}
