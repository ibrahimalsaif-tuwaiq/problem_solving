function isLeapYear(year) {
  return year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0);
}

console.log(isLeapYear(1000)); // false
console.log(isLeapYear(1200)); // true