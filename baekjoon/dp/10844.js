const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = +inputs;
  const memo = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
  const DIVIDER = 1000000000;

  for (let i =1; i<=N;i++) {
    memo.push(Array(10).fill(0));
    for (let j =0;j<10;j++) {
      memo[i][j] = ((memo[i -1][j -1] ?? 0) + (memo[i -1][j +1] ?? 0)) % DIVIDER;
    }
  }

  return memo[N -1].reduce((sum, curr) => sum + curr, 0) % DIVIDER;
}

console.log(solution(inputs));
