import { writeFileSync } from "fs";
import { join } from "path";
import { server } from "../../../index";
import { v4 as uuid } from "uuid";
import { config } from "../../../config";

export const storeImage = (buffer: Buffer) => {
  let path = join(server.app.get("publicPath"), "images/", `${uuid()}.jpg`);
  writeFileSync(path, buffer);
  path = path
    .replace(
      server.app.get("publicPath"),
      process.env.NODE_ENV === "production"
        ? `${config.host}`
        : `${config.host}:${config.port}/`
    )
    .replace(/\\/g, "/");
  return path
    .replace(server.app.get("publicPath"), `${config.host}`)
    .replace(/\\/g, "/");
};
