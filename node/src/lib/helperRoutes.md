## listFiles(parentFolderId: string):

```json
[
  {
    "fileName": "archivo1.py",
    "content": "Contenido del archivo 1",
    "parentFolderId": "folderId1",
    "userId": "userID1"
  },
  {
    "fileName": "archivo2.py",
    "content": "Contenido del archivo 2",
    "parentFolderId": "folderId1",
    "userId": "userID1"
  },
  {
    "fileName": "archivo3.py",
    "content": "Contenido del archivo 3",
    "parentFolderId": "folderId1",
    "userId": "userID2"
  }
]
```

## readFile(parentFolderId: string, fileName: string):

```json
{
  "fileName": "archivo1.py",
  "content": "Contenido del archivo 1",
  "parentFolderId": "folderId1",
  "userId": "userID1"
}
```

## listFolders(parentFolderId: string):`

```json
[
  {
    "folderName": "Subcarpeta 1",
    "parentFolderId": "folderId1",
    "userId": "userID1"
  },
  {
    "folderName": "Subcarpeta 2",
    "parentFolderId": "folderId1",
    "userId": "userID2"
  }
]
```
## createFolder(parentFolderId: string, folderName: string):`

devuelve un 200 

## endpoints GET

/endpoint/files/userId/parentFolderId
/endpoint/folders/userId/parentFolderId
/endpoint/files/fileId

## endpoints POST - createFolder
/endpoint/folders/userId

body: {
  parentFolderId: "",
  folderName:""
}

## endpoints POST - createFile
/endpoint/files/userId

body: {
  parentFolderId: "",
  fileName:"",
  content: ""
}