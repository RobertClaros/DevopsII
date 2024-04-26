import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./lib/db.ts";


connectDB();
const app = express();

import { router } from './presentation/routes/index.ts';

app.use(bodyParser.json());
app.use(cors());
app.use("/api/storage", router); // /api/storage/{storage}/file

export default app;