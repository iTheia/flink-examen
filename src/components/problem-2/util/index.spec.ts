import { expect, should } from "chai";
import "jasmine";
import { genRandomNumber } from "../../util";
import { makeMails } from "./index";

should();

describe("Verify mail maker", () => {
  it("should create the number of mails", () => {
    for (let index = 0; index < genRandomNumber(15); index++) {
      const n = genRandomNumber(20, 10);
      const result = makeMails(n);
      expect(result).to.be.an("array");
      expect(result).to.have.lengthOf(n);
    }
  });
  it("should verify that gets a number", () => {
    for (let index = 0; index < genRandomNumber(15); index++) {
      // @ts-ignore
      const passedFalse = makeMails(false);
      // @ts-ignore
      const passedObject = makeMails({});
      expect(passedFalse).to.be.an("array");
      expect(passedFalse).to.have.lengthOf(0);
      expect(passedObject).to.be.an("array");
      expect(passedObject).to.have.lengthOf(0);
    }
  });
});
