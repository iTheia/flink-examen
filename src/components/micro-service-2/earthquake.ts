import { genRandomNumber } from "../util";

export function makeEarthquakePoint(
  earthquake = false,
  duration = 0,
  freq = [{ min: 10, max: 0 }]
) {
  try {
    if (!duration) throw new Error("");
    if (!freq) throw new Error("");
    if (typeof earthquake !== "boolean") throw new Error("");
    if (typeof freq !== "object") throw new Error("");
    if (typeof duration !== "number") throw new Error("");
    if (!earthquake) {
      earthquake = genRandomNumber() > 9;
      throw new Error("");
    }
    if (duration > 20) {
      earthquake = false;
      duration = 0;
      throw new Error("");
    }
    duration++;
    const pivot = genRandomNumber(freq.length, 1) - 1;
    const { min, max } = freq[pivot];
    const point = genRandomNumber(max, min);
    return genRandomNumber() > 4 ? -point : point;
  } catch (error) {
    return 0;
  }
}
