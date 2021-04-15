export const genRandomNumber = (max = 10, min = 1) => {
  if (typeof max !== "number") return 1;
  if (typeof min !== "number") return 1;
  return Math.floor(Math.random() * max) + min;
};
