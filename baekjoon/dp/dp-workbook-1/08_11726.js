const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(N) {
  const memo = [0, 1, 2, 3];

  for (let i = 4; i <= N; i++) {
    memo[i] = (memo[i - 2] + memo[i - 1]) % 10007;
  }

  return memo[N];
}

console.log(solution(Number(inputs)));
