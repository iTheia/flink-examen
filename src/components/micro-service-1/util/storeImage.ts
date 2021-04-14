import { writeFileSync } from "fs";
import { join } from "path";
import { server } from "../../../index";
import { v4 as uuid } from "uuid";

export const storeImage = (buffer: Buffer) => {
  const path = join(server.app.get("publicPath"), "/images/", `${uuid()}.jpg`);
  writeFileSync(path, buffer);
  return path;
};
