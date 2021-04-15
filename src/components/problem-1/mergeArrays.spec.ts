import { expect } from "chai";
import "jasmine";
import { genRandomNumber } from "../util";
import { mergeArrays } from "./mergeArrays";
import * as source from "./source";

describe("Verify merge array method", () => {
  it("Should return an empty array if not have the appropriate parameters", () => {
    // @ts-ignore
    expect(mergeArrays()).to.be.an("array").that.is.empty;
    expect(mergeArrays(15)).to.be.an("array").that.is.empty;
    expect(mergeArrays("")).to.be.an("array").that.is.empty;
    expect(mergeArrays({})).to.be.an("array").that.is.empty;
    expect(mergeArrays([])).to.be.an("array").that.is.empty;
  });
  const calculteLengthOfArrays = (array: Array<[]>) =>
    array.reduce((acc, element) => acc + element.length, 0);
  it("should return all cominations length", () => {
    for (let i = 0; i < genRandomNumber(20, 15); i++) {
      const keys = Object.keys(source);
      const allArrays = keys.map((key) => ({ [key]: source[key] }));
      const items = new Array(genRandomNumber(keys.length - 1)).map(
        () => keys[genRandomNumber(keys.length - 1, 0)]
      );
      let obj = {};
      items.forEach((item) => ({
        ...obj,
        [keys[item]]: allArrays[keys[item]],
      }));
      const result = mergeArrays(obj);
      expect(result).to.be.an("array");
      const arrays = items.map((item) => allArrays[keys[item]]);
      // @ts-ignore
      expect(result).lengthOf(calculteLengthOfArrays(arrays));
    }
  });
});
