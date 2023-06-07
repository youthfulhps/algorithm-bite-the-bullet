const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = +inputs;
  let result;

  const memo = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);

  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 3;

  for (let i = 4; i<=N;i++) {
    for (let j = 0; j**2<=i;j++) {
      memo[i] = Math.min(memo[i], memo[i - j ** 2] + 1);
    }
  }

  return memo[N];
}

console.log(solution(inputs));
