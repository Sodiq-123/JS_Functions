function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
    // (Fill in the missing line here)
      max_num = num;
    }
  }
  return max_num;
}
