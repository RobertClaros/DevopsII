import { IFileRepository } from "../file/IFIleRepository";

export interface IGoogleRepository extends IFileRepository {
    getData(fileId: string): Promise<object>;
}
