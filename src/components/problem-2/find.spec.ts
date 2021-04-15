import { expect, should } from "chai";
import "jasmine";
import { genRandomNumber } from "../util";
import { makeMails } from "./util";
import { recursive } from "./findWhitFilter";
should();

describe("Verify find filter", () => {
  it("Should return an array whit items or empty array if not found", () => {
    for (let index = 0; index < genRandomNumber(15); index++) {
      const n = genRandomNumber(20, 10);
      const mails = makeMails(n);
      const result = recursive(mails, { name: "a" });
      expect(result).to.be.an("array");
      if (result.length > 0) {
        result.forEach((item) => {
          expect(item).to.have.property("children").equal("a");
          expect(item).to.have.property("parent").equal("name");
          expect(item).to.have.property("index");
          expect(item).to.have.property("current");
        });
      }
    }
  });
  it("Should return an empty array if not have the appropriate parameters", () => {
    expect(recursive([], { name: "a" })).to.be.an("array").that.is.empty;
    // @ts-ignore
    expect(recursive("", { name: "a" })).to.be.an("array").that.is.empty;
    // @ts-ignore
    expect(recursive(makeMails(10), "")).to.be.an("array").that.is.empty;
    // @ts-ignore
    expect(recursive("", 0)).to.be.an("array").that.is.empty;
  });
});
