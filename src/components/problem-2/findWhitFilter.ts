export function recursive(array, filter) {
  let index = 0;
  let deep_level = 0;
  let matched = [];
  recursive_match(array, filter, index, deep_level, matched);
  return matched;
}

export function recursive_match(array, filter, index, deep_level, matched) {
  for (var property in array) {
    if (deep_level === 0) index++;
    const current = array[property];
    if (typeof current === "object") {
      deep_level++;
      recursive_match(current, filter, index, deep_level, matched);
      deep_level--;
    } else {
      const lookup = filter[property];
      if (typeof lookup !== "undefined") {
        const match = new RegExp(lookup, "gi").test(current);
        if (match) {
          matched.push({
            children: lookup,
            parent: property,
            index,
          });
        }
      }
    }
  }
}
