import { genRandomNumber } from "../util";

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
let maxDuration = 15;
export function makeEarthquakePoint() {
  try {
    if (!earthquake) {
      earthquake = genRandomNumber() > 8;
      throw new Error("");
    }
    if (duration > maxDuration) {
      earthquake = false;
      duration = 0;
      maxDuration = genRandomNumber(20, 5);
      throw new Error("");
    }
    duration++;
    const pivot = genRandomNumber(freq.length, 1) - 1;
    const { min, max } = freq[pivot];
    const point = genRandomNumber(max, min);
    return genRandomNumber() > 5 ? point : -point;
  } catch (error) {
    return 0;
  }
}
