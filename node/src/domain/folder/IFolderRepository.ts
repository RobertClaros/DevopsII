export interface IFolderRepository {
  listFiles(parentFolderId: string): Promise<object[]>;
  listFolders(parentFolderId: string): Promise<object[]>;
  createFolder(userId: string, parentFolderId: string, name: string): Promise<void>;
}
