import { sendData } from "./components";
import { config } from "./config";
import { app, HTTPServer } from "./http";

export const server = new HTTPServer(app);

server.createSocketIo();
server.addSocketHandler(sendData);
server.start(config.port);
