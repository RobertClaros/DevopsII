export interface IFileRepository {
  saveFile(
    userId: string,
    parentFolderId: string,
    name: string,
    content: string
  ): void;
}
