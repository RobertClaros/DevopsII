import { IFileRepository } from "../src/domain/file/IFIleRepository";
import { IFolderRepository } from "../src/domain/folder/IFolderRepository";

describe("FileRepository", () => {
  let fileRepository: IFileRepository;

  beforeEach(() => {
    fileRepository = {
      saveFile: jest.fn(),
    };
  });

  it("should save a file with the provided parameters", () => {
    const userId = "user123";
    const parentFolderId = "folder4567890";
    const name = "test.txt";
    const content = "Hello, world! i am a python file";

    fileRepository.saveFile(userId, parentFolderId, name, content);

    expect(fileRepository.saveFile).toHaveBeenCalledWith(
      userId,
      parentFolderId,
      name,
      content
    );
  });

  it('checks if the result is void', () => {
    const userId = "user000";
    const parentFolderId = "folder9876543";
    const name = "my-text.txt";
    const content = "Hello, world! i am a new file";

    const theResult = fileRepository.saveFile(userId, parentFolderId, name, content);
    //Function with no return will return 'undefined'
    expect(theResult).toBeUndefined();
  });

});
describe("FolderRepository", () => {
  let folderRepository: IFolderRepository;

  beforeEach(() => {
    folderRepository = {
      listFiles: jest.fn(),
      listFolders: jest.fn(),
      createFolder: jest.fn(),
    };
  });

  it("should list files in a folder with the provided parentFolderId", async () => {
    const parentFolderId = "folder123";
    await folderRepository.listFiles(parentFolderId);
    expect(folderRepository.listFiles).toHaveBeenCalledWith(parentFolderId);
  });

  it("should list folders in a folder with the provided parentFolderId", async () => {
    const parentFolderId = "folder456";
    await folderRepository.listFolders(parentFolderId);
    expect(folderRepository.listFolders).toHaveBeenCalledWith(parentFolderId);
  });

  it("should create a folder with the provided userId, parentFolderId, and name", () => {
    const userId = "user123";
    const parentFolderId = "parentFolder456";
    const name = "new-folder";

    folderRepository.createFolder(userId, parentFolderId, name);

    expect(folderRepository.createFolder).toHaveBeenCalledWith(
      userId,
      parentFolderId,
      name
    );
  });
});
