# __RECURSION__

## SOURCE MAP

* src
  * 1.numIsOdd.js
  * 2.minPositive.js
  * 3.violatedIndex.js
  * 4.shiftRecursion.js
  * 5.nestedArray.js
* README.md

---

1. Write a recursive function to determine whether all digits of the number are odd or not.

| Input | Output |
| ----- | ------ |
| 4211133 | false |
| 7791 | true |
| 5 | true |

[Decision](./src/1.numIsOdd.js)

---

2. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1).

| Input | Output |
| ----- | ------ |
| [56, -9, 87, -23, 0, -105, 55, 1] | 0 |
| [45, -9, 15, 5, -78] | 5 |
| [-5, -9, -111, -1000, -7] | -1 |

[Decision](./src/2.minPositive.js)

---

3. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

| Input | Output |
| ----- | ------ |
| [2, 12, 15, 48, 64] | -1 |
| [-9, -4, -4, 3, 12, 4, 5] | 5 |

[Decision](./src/3.violatedIndex.js)

---

4. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.shift())

| Input | Output |
| ----- | ------ |
| [6, 78, ‘n’, 0, 1] | [78, ‘n’, 0, 1] |
| [5] | [] |
| [] | [] |

[Decision](./src/4.shiftRecursion.js)

---

5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

| Input | Output |
| ----- | ------ |
| [1, [3, 4, [1, 2]], 10] | [1, 3, 4, 1, 2, 10] |
| [14, [1, [[[3, []]], 1], 0] | [14, 1, 3, 1, 0] |

[Decision](./src/5.nestedArray.js)

---