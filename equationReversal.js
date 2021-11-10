function equationReversal(eq) {
  return eq
    .split(/([*+-/])/)
    .reverse()
    .join("");
}

console.log(equationReversal("100*b/y")); //"y/b*100"
