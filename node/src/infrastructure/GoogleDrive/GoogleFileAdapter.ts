import { google } from "googleapis";
import keys from '../../lib/apikey.json' with { type: "json" };
import { JWT } from 'google-auth-library';
import { IGoogleRepository } from "../../domain/google/IGoogleRepository.ts";


const client = new JWT({
    email: keys.client_email,
    key: keys.private_key,
    scopes: ['https://www.googleapis.com/auth/drive'],
});
await client.authorize();
const drive = google.drive({ version: 'v3', auth: client });

export class GoogleFileAdapter implements IGoogleRepository {

    async saveFile(
        userId: string,
        parentFolderId: string,
        name: string,
        content: string
    ): Promise<void> {

        const fileMetaData = {
            name: name,
            parents: [parentFolderId]
        }
        try {
            await drive.files.create({
                requestBody: fileMetaData,
                media: {
                    body: content,
                    mimeType: 'text/plain'
                },
                fields: 'id'
            });
        } catch (e) {
            console.log(e);
        }
    }

    async getData(fileId: string): Promise<object> {
        const file = await drive.files.get({
            fileId: fileId,
            alt: 'media'
        });
        const data = { data: file.data };
        return data
    }
}
