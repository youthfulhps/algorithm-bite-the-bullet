const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const N = inputs.shift();
  let myRank = inputs.shift();
  let result = 0;

  while (myRank <= Math.max(...inputs)) {
    inputs.sort((a, b) => b - a);
    myRank++;
    inputs[0] -= 1;
    result++;
  }

  return result;
}

console.log(solution(inputs));
