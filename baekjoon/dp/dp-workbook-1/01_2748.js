const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const memo = [0n, 1n];

  for (let i = 2; i <= inputs; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[inputs].toString();
}

console.log(solution(Number(inputs)));
