// src/index.ts
import express, { Express } from "express";
import { Request, Response, NextFunction } from "express";
// ML
import * as tf from "@tensorflow/tfjs";

console.log("The TesorFlow version is=>", tf.version.tfjs);

const app: Express = express();
const port = 3000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
