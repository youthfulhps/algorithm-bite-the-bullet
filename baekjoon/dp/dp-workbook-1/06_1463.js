const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(N) {
  const memo = [0, 0, 1, 1];

  if (N < 4) {
    return memo[N];
  }

  for (let i = 4; i <= N; i++) {
    memo[i] = memo[i - 1] + 1;

    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }

    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    }
  }

  return memo[N];
}

console.log(solution(Number(inputs)));
