import { genRandomNumber } from "../util";
import { recursive } from "./findWhitFilter";
import { makeMails } from "./util";

recursive(makeMails(genRandomNumber()), { email: ".net" });
recursive(makeMails(genRandomNumber()), { name: "Jhon" });
recursive(makeMails(genRandomNumber()), { email: ".com" });
