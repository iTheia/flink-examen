import { recursive } from "./findWhitFilter";
import { makeMails } from "./util";

recursive(makeMails(5), { email: ".net" });
recursive(makeMails(5), { name: "Jhon" });
recursive(makeMails(5), { email: ".com" });
