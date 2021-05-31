//

function numIsOdd(num) {
  isOdd = true

  if (num !== 0) {
    const symbol = num % 10
    if (symbol % 2 !== 0 || symbol === 1) {
      const newNum = Math.trunc(num / 10)
      numIsOdd(newNum)
    } else {
      isOdd = false
    }
  }

  return isOdd
}

console.log(numIsOdd(4211133))
console.log(numIsOdd(7791))
console.log(numIsOdd(5))
