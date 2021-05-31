function violatedIndex(items, i = 0) {
  let index = i

  if (items[i] >= items[i - 1] || i === 0) {
    if (items[index + 1] !== undefined) {
      index++
      return violatedIndex(items, index)
    } else {
      return -1
    }
  } else {
    return i
  }
}

console.log(violatedIndex([2, 12, 15, 48, 64]))
console.log(violatedIndex([-9, -4, -4, 3, 12, 4, 5]))
