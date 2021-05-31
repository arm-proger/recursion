function shiftRec(arr, i = 0) {
  let index = i

  if (index === 0) delete arr[index]
  index++
  arr[index - 1] = arr[index]

  if (index === arr.length - 1 || arr.length === 1) {
    arr.length -= 1
    return arr
  } else {
    return shiftRec(arr, index)
  }
}

console.log(shiftRec([6, 78, 'n', 0, 1]))
console.log(shiftRec([5]))
console.log(shiftRec([]))
