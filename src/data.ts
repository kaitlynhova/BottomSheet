export const generatePlaceholderContent = (nItems: number) => {
  const result = Array(nItems);
  for (let i = 0; i < nItems; i++) {
    result[i] = i;
  }
  return result;
};
