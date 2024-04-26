import { IFileRepository } from "../../domain/file/IFIleRepository.ts";
export class FileService {
  constructor(protected fileRepository: IFileRepository) { }
  async saveFile(
    userId: string,
    parentFolderId: string,
    name: string,
    content: string
  ): Promise<void> {
    return this.fileRepository.saveFile(userId, parentFolderId, name, content);
  }
}
