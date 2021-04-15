import { expect } from "chai";
import { genRandomNumber } from "./index";
import "jasmine";

describe("Verify random number generator", () => {
  it("generate a number betwen 1 and 10", () => {
    const result = genRandomNumber();
    expect(result).to.be.an("number").to.be.below(11).to.be.above(0);
  });

  it("throw 1 if not passing a number", () => {
    // @ts-ignore
    expect(genRandomNumber(10, false)).to.be.equal(1);
    // @ts-ignore
    expect(genRandomNumber(false)).to.be.equal(1);
  });
});
