export const productSort = (data = []) => {
  console.log(data[0].product)
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

export const sortPrefernces =(Array1= [], Array2 = [])=>{
const frequencyMap = new Map();
for (const num of Array1){
  frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
}
const sortedArray2= [];
for (const num of Array2){
  if(frequencyMap.has(num) && frequencyMap.get(num) > 0){
    sortedArray2.push(num);
    frequencyMap.set(num, frequencyMap.get(num) - 1)
  }
}
sortedArray2.push(...Array2.filter(num => ! frequencyMap.has(num)))
const sortedArray1= [];
for (const num of Array1){
  if(frequencyMap.has(num) && frequencyMap.get(num) > 0){
    sortedArray1.push(num);
    frequencyMap.set(num, frequencyMap.get(num) - 1)
  }
}
sortedArray2.push(...Array2.filter(num => ! frequencyMap.has(num)))
return [sortedArray1, sortedArray2]
}
