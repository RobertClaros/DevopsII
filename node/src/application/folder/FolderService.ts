import { IFolderRepository } from "../../domain/folder/IFolderRepository.ts";
export class FolderService {
  constructor(private folderRepository: IFolderRepository) {}

  async listFiles(parentFolderId: string): Promise<object[]> {
    return this.folderRepository.listFiles(parentFolderId);
  }

  async listFolders(parentFolderId: string): Promise<object[]> {
    return this.folderRepository.listFolders(parentFolderId);
  }

  async createFolder(
    userId: string,
    parentFolderId: string,
    name: string
  ): Promise<void> {
    return this.folderRepository.createFolder(userId, parentFolderId, name);
  }
}
