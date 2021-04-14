const map = {
  "(": ")",
  "[": "]",
  "{": "}",
};

export const matchBrakets = (string: string) => {
  if (!string) return false;
  if (typeof string !== "string") return false;
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (Object.keys(map).includes(string[i])) {
      stack.push(string[i]);
    } else {
      if (!Object.values(map).includes(string[i])) {
        continue;
      }
      const last = stack.pop();
      if (string[i] !== map[last]) return false;
    }
  }
  return stack.length === 0;
};
