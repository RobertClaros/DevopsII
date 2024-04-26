import { IFileRepository } from "../../../domain/file/IFIleRepository.ts";
import { FileModel } from "../models/Files.model.ts";

export class MongoFileAdapter implements IFileRepository {
  async saveFile(
    userId: string,
    parentFolderId: string,
    name: string,
    content: string
  ): Promise<void> {
    try {
      const newFile = new FileModel({ userId, parentFolderId, name, content });
      newFile.save();
    } catch (e) {
      console.log(e);
    }
  }
}
