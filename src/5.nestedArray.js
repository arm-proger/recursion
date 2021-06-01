function nestedArr(arr, newArr = []) {
  let thisArr = newArr;
  arr.forEach((items) => {
    if (Array.isArray(items)) {
      nestedArr(items, thisArr);
    } else {
      thisArr.push(items);
    }
  });
  return thisArr;
}

console.log(nestedArr([1, 2, [3, 4, [1, 2]], 10]))
console.log(nestedArr([14, [1, [[[3, []]], 1], 0]]))