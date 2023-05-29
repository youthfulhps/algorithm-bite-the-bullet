// BigInt...

const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = BigInt(inputs);
  const memo = [0n, 1n, 1n, 2n];

  for (let i =4; i<=N;i++) {
    memo[i] = memo[i-2] + memo[i-1];
  }

  return memo[N].toString();
}

console.log(solution(inputs));
