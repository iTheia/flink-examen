import { Socket, Server } from "socket.io";
import { makeEarthquakePoint } from "./earthquake";

export const sendData = (_: Socket, io: Server) => {
  setInterval(function () {
    io.sockets.emit("pushdata", makeEarthquakePoint());
  }, 500);
};
