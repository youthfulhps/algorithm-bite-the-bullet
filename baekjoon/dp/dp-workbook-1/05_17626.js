const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(N) {
  if (Number.isInteger(Math.sqrt(N))) {
    return 1;
  }

  const memo = Array(N + 1).fill(5);

  memo[0] = 1;
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= N; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      memo[i] = 1;
      continue;
    }

    for (let j = 1; j < Math.sqrt(i); j++) {
      memo[i] = Math.min(memo[i], memo[i - Math.pow(j, 2)] + 1);
    }
  }

  return memo[N];
}

console.log(solution(Number(inputs)));
