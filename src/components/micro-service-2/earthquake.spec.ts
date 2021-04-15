import { expect } from "chai";
import "jasmine";
import { genRandomNumber } from "../util";
import { makeEarthquakePoint } from "./earthquake";

describe("Verify Earthquake method", () => {
  it("Should return 0 if not have the appropriate parameters", () => {
    // @ts-ignore
    expect(makeEarthquakePoint("")).to.be.a("number").that.is.equal(0);
    // @ts-ignore
    expect(makeEarthquakePoint([], "", "")).to.be.a("number").that.is.equal(0);
    // @ts-ignore
    expect(makeEarthquakePoint("", false, []))
      .to.be.a("number")
      .that.is.equal(0);
    // @ts-ignore
    expect(makeEarthquakePoint({})).to.be.a("number").that.is.equal(0);
    // @ts-ignore
    expect(makeEarthquakePoint([])).to.be.a("number").that.is.equal(0);
  });

  it("return a number", () => {
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
    for (let i = 0; i < genRandomNumber(40, 30); i++) {
      expect(makeEarthquakePoint(earthquake, duration, freq)).to.be.a("number");
    }
  });
});
