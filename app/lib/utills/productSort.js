export const productSort = (data = []) => {
  if (data.length < 2) return data;
  const sorted = data.sort((a, b) => {
    if (a.product.length === 0 && b.product.length !== 0) {
      return 1;
    } else if (a.product.length !== 0 && b.product.length === 0) {
      return -1;
    } else return 0;
  });
  return sorted;
};
