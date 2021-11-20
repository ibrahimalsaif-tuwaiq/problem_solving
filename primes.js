function primes(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
        result.push(i);
    }
  }
  if (result.length == 0) return null;
  else return result;
}

console.log(primes(1, 10)); // [2, 3, 5, 7]
console.log(primes(8, 9)); // null
