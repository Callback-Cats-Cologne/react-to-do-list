export function without(array, value) {
  const newArray = array.filter((number) => number !== value);
  return newArray;
}
