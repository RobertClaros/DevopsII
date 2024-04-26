import { FileService } from "../src/application/file/FileService";
import { IFileRepository } from "../src/domain/file/IFIleRepository";
import { FolderService } from "../src/application/folder/FolderService";
import { IFolderRepository } from "../src/domain/folder/IFolderRepository";

describe("FileService", () => {
  let fileService: FileService;
  let mockFileRepository: jest.Mocked<IFileRepository>;

  beforeEach(() => {
    mockFileRepository = {
      saveFile: jest.fn(),
    };
    fileService = new FileService(mockFileRepository);
  });

  it("should call saveFile method of fileRepository with correct parameters", async () => {
    const userId = "user123";
    const parentFolderId = "folder456";
    const name = "test.txt";
    const content = "Hello, world!";

    await fileService.saveFile(userId, parentFolderId, name, content);

    expect(mockFileRepository.saveFile).toHaveBeenCalledWith(
      userId,
      parentFolderId,
      name,
      content
    );
  });
});

describe("FolderService", () => {
  let folderService: FolderService;
  let mockFolderRepository: jest.Mocked<IFolderRepository>;

  beforeEach(() => {
    mockFolderRepository = {
      listFiles: jest.fn(),
      listFolders: jest.fn(),
      createFolder: jest.fn(),
    };

    folderService = new FolderService(mockFolderRepository);
  });

  it("should call listFiles method of folderRepository with correct parentFolderId", async () => {
    const parentFolderId = "folder123";

    await folderService.listFiles(parentFolderId);

    expect(mockFolderRepository.listFiles).toHaveBeenCalledWith(parentFolderId);
  });

  it("should call listFolders method of folderRepository with correct parentFolderId", async () => {
    const parentFolderId = "folder456";

    await folderService.listFolders(parentFolderId);

    expect(mockFolderRepository.listFolders).toHaveBeenCalledWith(
      parentFolderId
    );
  });

  it("should call createFolder method of folderRepository with correct parameters", async () => {
    const userId = "user123";
    const parentFolderId = "parentFolder456";
    const name = "new-folder";

    await folderService.createFolder(userId, parentFolderId, name);

    expect(mockFolderRepository.createFolder).toHaveBeenCalledWith(
      userId,
      parentFolderId,
      name
    );
  });
});
