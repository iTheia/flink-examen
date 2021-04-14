import { matchBrakets } from "./matchBrakets";

console.log(matchBrakets("(hola como estas)"));
console.log(matchBrakets("()()()"));
console.log(matchBrakets("([]) {()-()}"));
console.log(matchBrakets("([)]"));
console.log(matchBrakets(")("));
console.log(matchBrakets("(hola como estás]"));
