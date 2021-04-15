import { Socket, Server } from "socket.io";
import { makeEarthquakePoint } from "./earthquake";

let earthquake = false;

const freq = [
  { min: 10, max: 12 },
  { min: 12, max: 19 },
  { min: 20, max: 28 },
  { min: 40, max: 44 },
  { min: 45, max: 50 },
  { min: 51, max: 70 },
];

let duration = 0;
export const sendData = (_: Socket, io: Server) => {
  setInterval(function () {
    io.sockets.emit(
      "pushdata",
      makeEarthquakePoint(earthquake, duration, freq)
    );
  }, 2000);
};
