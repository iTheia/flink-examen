import { config } from "./config";
import { app, HTTPServer } from "./http";

export const server = new HTTPServer(app);

server.start(config.port);
