import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import indexRouter from "./routes/index.js";
import apiRouter from "./routes/api.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../client/PP_Assignment/dist")));

app.use("/api", apiRouter);
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/PP_Assignment/dist/index.html"));
});

export default app;
