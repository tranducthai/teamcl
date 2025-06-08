import "dotenv/config";
import cors from "cors";
import { StatusCodes } from "http-status-codes";
import cookieParser from "cookie-parser";
import express, { json } from "express";
import { createServer } from "http";

import apiRouter from "./api/routes/index.js";
import setupSocket from "./socket/index.js";
import embeddingProvider from "./config/embedding-provider.js";
import { handleApiError } from "./middlewares/error-middleware.js";

const startServer = () => {
  const app = express();
  const server = createServer(app);

  setupSocket(server);

  app.use(json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: [process.env.CLIENT_ORIGIN, "http://localhost:3000"],
      credentials: true
    })
  );

  app.use("/api", apiRouter());
  app.use(handleApiError);

  app.get("/", async (req, res) => {
    res.status(StatusCodes.OK).json({
      success: true,
      message: "OK"
    });
  });

  app.get("/health-check", async (req, res) => {
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Healthcheck passed!"
    });
  });

  const PORT = process.env.APP_PORT || 8080;
  const HOST = process.env.APP_HOST || "localhost";

  server.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
  });
};

(async () => {
  try {
    await embeddingProvider
      .initialize()
      .then(() => {
        console.log("Embedding service pre-initialization process started successfully.");
      })
      .catch((err) => {
        throw err;
      });

    startServer();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
