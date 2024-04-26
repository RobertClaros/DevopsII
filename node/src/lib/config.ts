// import { fileURLToPath } from "url";
// import { dirname } from "path";

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

export const config = {
  // rootPath: __dirname, //local path
  // rootPath: '/src/src/', //docker path
  port: 8080,
  // folderSave:`${__dirname}/shared/`, //local path
  // folderSave: '/shared/', //docker path
  folderSave: `/src/shared/`, //docker path
  debounceDelay: 1000,
};
