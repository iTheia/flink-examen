import { expect } from "chai";
import "jasmine";
import { genRandomNumber } from "../util";
import { makeEarthquakePoint } from "./earthquake";

describe("Verify Earthquake method", () => {
  it("return a number", () => {
    for (let i = 0; i < genRandomNumber(40, 30); i++) {
      expect(makeEarthquakePoint()).to.be.a("number");
    }
  });
});
