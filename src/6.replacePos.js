function replacePos(letters, n) {
  if (n > 0) {
    letters.push(letters[0])
    letters.shift()
    replacePos(letters, --n)
  } else if (n < 0) {
    letters.unshift(letters[letters.length - 1])
    letters.pop()
    replacePos(letters, ++n)
  }
  return letters
}

console.log(replacePos(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3))
console.log(replacePos(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2))
