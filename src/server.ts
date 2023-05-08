require("dotenv").config();

import express, { Express } from "express";
import http, { Server } from "http";
import cors from "cors";
import morgan from "morgan";
import { CarreerRouter } from "./routes/index";
import CorsConfig from "./config/cors";

const globalRoutes = {
  career: "/api/career",
};

const app: Express = express();

const mongoose = require("./config/db.config").connection(app.get("env"));

// Middlewares
app.use(cors(CorsConfig));
app.use(express.static("public"));
app.use(express.json());

if (app.get("env") === "development") {
  app.use(morgan("dev"));
}

// ROUTES
app.use(globalRoutes.career, CarreerRouter);

const server: Server = http.createServer(app);

// Server events handlers
server.on("listening", () => {
  console.log("Server info: ");
  console.log(JSON.stringify(server.address()));
});
server.on("error", (error: Error) => {
  if (error) {
    console.log("Server Error");
    console.log(error);
  }
});

server.on("close", async (error: Error) => {
  if (error) {
    console.log("Server Error");
    console.log(error);
    process.exit(0);
  }

  console.log("Server down succsessfully");
  await mongoose.connection.close(false);
  process.exit(0);
});

export { app, server };
