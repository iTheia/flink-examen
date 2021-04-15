import { IConfig } from "./types";

require("dotenv").config();

export const prod: IConfig = {
  port: parseInt(process.env.PORT) || 8080,
  allowedOrigin: process.env.ORIGIN ? process.env.ORIGIN.split(",") : [""],
  host: process.env.HOST,
};
