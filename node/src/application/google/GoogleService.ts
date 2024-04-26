import { IGoogleRepository } from "../../domain/google/IGoogleRepository.ts";
import { FileService } from "../file/FileService.ts";

export class GoogleService extends FileService {
    constructor(protected fileRepository: IGoogleRepository) {
        super(fileRepository);
    }

    async getData(fileId: string): Promise<object> {
        return this.fileRepository.getData(fileId);
    }
}