import express from "express";
import { json, urlencoded } from "body-parser";
import { join } from "path";
import { router } from "../routes";

export const app = express();

const publicPath = join(__dirname, "../../", "public");

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use("/", express.static(publicPath));
app.use("/api/v1", router);
