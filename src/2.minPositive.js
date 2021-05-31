function minPositive(nums, minPosNum = Infinity) {
  let lastItem = nums[nums.length - 1]
  let newMinPosNum = minPosNum

  if (lastItem >= 0 && lastItem < newMinPosNum) {
    newMinPosNum = nums[nums.length - 1]
  }

  if (nums.length !== 0) {
    nums.pop()
    return minPositive(nums, newMinPosNum)
  } else {
    if(newMinPosNum === Infinity) newMinPosNum = -1
  }

  return newMinPosNum
}

console.log(minPositive([56, -9, 87, -23, 0, -105, 55, 1]))
console.log(minPositive([45, -9, 15, 5, -78]))
console.log(minPositive([-5, -9, -111, -1000, -7]))