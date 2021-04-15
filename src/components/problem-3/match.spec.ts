import { should, expect } from "chai";
import "jasmine";
import { matchBrakets } from "./matchBrakets";

should();
describe("Verify matching brakets", () => {
  it("should return true for a balanced text", () => {
    const text = "([]) {()-()}";
    expect(matchBrakets(text)).to.be.true;
  });

  it("should return false for a not balanced text", () => {
    const text = "([)]";
    expect(matchBrakets(text)).to.be.false;
  });

  it("should return false whit undefined", () => {
    let text;
    expect(matchBrakets(text)).to.be.false;
  });

  it("should return false whit a number", () => {
    const text = 15;
    // @ts-ignore
    expect(matchBrakets(text)).to.be.false;
  });
});
