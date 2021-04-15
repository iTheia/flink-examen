import { writeFileSync } from "fs";
import { join } from "path";
import { server } from "../../../index";
import { v4 as uuid } from "uuid";
import { config } from "../../../config";

export const storeImage = (buffer: Buffer) => {
  const path = join(server.app.get("publicPath"), "/images/", `${uuid()}.jpg`);
  writeFileSync(path, buffer);
  return path
    .replace(server.app.get("publicPath"), `${config.host}:${config.port}`)
    .replace(/\\/g, "/");
};
