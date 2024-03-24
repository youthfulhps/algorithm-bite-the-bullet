const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = Number(inputs);

  const memo = [0, 1, 1];

  for (let i = 3; i <= N; i++) {
    memo.push((memo[i - 1] + memo[i - 2]) % 1_000_000_007)
  }

  return memo[N];
}

console.log(solution(inputs));
