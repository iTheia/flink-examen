import { mergeArrays } from "./mergeArrays";
import { ancients, colors, js_frameworks, constellations } from "./source";

console.table(
  mergeArrays({
    colors,
    ancients,
  })
);

console.table(
  mergeArrays({
    colors,
    ancients,
    js_frameworks,
  })
);

console.table(
  mergeArrays({
    colors,
    ancients,
    constellations,
  })
);
