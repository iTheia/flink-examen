import { IConfig } from "./types";

require("dotenv").config();

export const dev: IConfig = {
  port: parseInt(process.env.DEV_PORT) || 5000,
  allowedOrigin:
    process.env.DEV_ORIGIN !== undefined
      ? process.env.DEV_ORIGIN.split(",")
      : ["http://localhost:3000", "http://localhost:3001"],
  host: "http://localhost:5000",
};
