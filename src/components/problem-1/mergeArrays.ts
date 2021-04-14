const valid = (object: Object) => {
  if (!object) {
    return false;
  }
  if (Object.keys(object).length === 0) {
    return false;
  }
  return true;
};

export const mergeArrays = (object: Object) => {
  if (!valid(object)) {
    return [];
  }
  const keys = Object.keys(object);
  if (keys.length === 1) {
    return object[keys[0]];
  }
  const values = Object.values(object);
  const response: Object[] = values.reduce(
    (accumulator, array, index) =>
      accumulator.reduce(
        (subArray: Object[], result: Object) =>
          subArray.concat(
            array.map((word: string) => {
              const key = keys[index];
              return typeof result === "object"
                ? { ...result, [key]: word }
                : { [key]: word };
            })
          ),
        []
      ),
    values[0]
  );
  return response.splice(0, response.length / values[0].length);
};
