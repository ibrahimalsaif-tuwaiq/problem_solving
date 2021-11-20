function highestRank(arr) {
  let count = 0;
  let max = 0;
  let result;

  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count += 1;
    } else {
      if (count > max) {
        max = count;
        result = arr[i];
      }
      count = 0;
    }
  }

  return result;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
