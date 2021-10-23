import "reflect-metadata";
import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
var cors = require("cors");

import "./database";
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: "erro",
      message: "Internal Server Error",
    });
  }
);

app.listen(4000, () => console.log("Server is Running"));
