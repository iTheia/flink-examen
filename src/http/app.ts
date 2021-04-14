import express from "express";
import { json, urlencoded } from "body-parser";
import { join } from "path";
import { router } from "../routes";

export const app = express();

export const publicPath = join(__dirname, "../", "public");

app.use(json());
app.use(urlencoded({ extended: true }));
app.set("publicPath", publicPath);
app.use(express.static(publicPath));
app.use("/", express.static(publicPath));
app.use("/api/v1", router);
