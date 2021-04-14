import http from "http";
import { Application } from "express";
import { Server as SocketIOServer } from "socket.io";

export class HTTPServer {
  public app: Application;
  public server: http.Server;
  public io: SocketIOServer;
  private ioHandlers = [];
  constructor(app: Application) {
    this.app = app;
    this.server = http.createServer(app);
  }

  async start(port: number) {
    this.server.listen(port);
  }

  addSocketHandler(handler: Function) {
    this.ioHandlers.push(handler);
  }

  createSocketIo() {
    const io: SocketIOServer = require("socket.io")(this.server);
    this.app.set("io", io);
    io.on("connection", (socket) => {
      this.ioHandlers.forEach((handler) => {
        handler(socket, io);
      });
    });
  }
}
