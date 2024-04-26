import { Router } from "express";

export const router = Router();

import mongoFileRouter from './mongoRoutes/FileRoutes.ts';
import mongoFolderRouter from './mongoRoutes/FolderRoutes.ts';

import googleFileRouter from './googleRoutes/FileRoutes.ts';
import googleFolderRouter from './googleRoutes/FolderRoutes.ts';

router.use('/db', mongoFileRouter);
router.use('/db', mongoFolderRouter);

router.use('/google', googleFileRouter)
router.use('/google', googleFolderRouter)