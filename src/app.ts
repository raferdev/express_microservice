import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import { v1Router } from "./routes/v1/v1-router.js";

const app: Express = express();

app.use(helmet());

app.use(express.json());
app.use(cors());

app.use(v1Router);

export { app };
