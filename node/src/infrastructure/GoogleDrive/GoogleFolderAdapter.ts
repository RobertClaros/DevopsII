import { google } from "googleapis";
import keys from '../../lib/apikey.json' with { type: "json" };
import { JWT } from 'google-auth-library';
import { IFolderRepository } from "../../domain/folder/IFolderRepository.ts";

const client = new JWT({
    email: keys.client_email,
    key: keys.private_key,
    scopes: ['https://www.googleapis.com/auth/drive'],
});
await client.authorize();
const drive = google.drive({ version: 'v3', auth: client });

export class GoogleFolderAdapter implements IFolderRepository {

    async listFiles(parentFolderId: string): Promise<object[]> {

        const res = await drive.files.list({
            q: `'${parentFolderId}' in parents and mimeType = 'text/plain'`,
        });
        const dataList = res.data.files;
        const folders = dataList?.map((folder) => ({
            _id: folder.id,
            name: folder.name,
            parentFolderId,
        }));
        return folders ? folders : [];
    }

    async listFolders(parentFolderId: string): Promise<object[]> {

        const res = await drive.files.list({
            q: `'${parentFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder'`
        });
        const dataList = res.data.files;
        const folders = dataList?.map((folder) => ({
            _id: folder.id,
            name: folder.name,
            parentFolderId
        }));
        return folders ? folders : [];
    }

    async createFolder(
        userId: string,
        parentFolderId: string,
        name: string
    ): Promise<void> {

        const fileMetaData = {
            name: name,
            parents: [parentFolderId],
            mimeType: 'application/vnd.google-apps.folder',
        }
        try {
            await drive.files.create({
                requestBody: fileMetaData,
                fields: 'id'
            });
        } catch (e) {
            console.log(e);
        }
    }
}
