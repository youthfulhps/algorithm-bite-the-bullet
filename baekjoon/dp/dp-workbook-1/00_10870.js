const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  if (inputs === 0 || inputs === 1) {
    return inputs;
  }

  return solution(inputs - 1) + solution(inputs - 2);
}

console.log(solution(Number(inputs)));
