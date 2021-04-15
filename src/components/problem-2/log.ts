import { genRandomNumber } from "../util";
import { recursive } from "./findWhitFilter";
import { makeMails } from "./util";

console.log(recursive(makeMails(genRandomNumber()), { email: ".net" }));
console.log(recursive(makeMails(genRandomNumber()), { name: "A" }));
console.log(
  recursive(makeMails(genRandomNumber()), { email: ".com", name: "a" })
);
