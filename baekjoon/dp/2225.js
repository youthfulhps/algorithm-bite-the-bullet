const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(inputs) {
  const DIVIDER = 1000000000;
  const [target, K] = inputs;
  const memo = Array.from({length: K + 1}, (_, index) => Array(target + 1).fill(0));

  for (let i = 1; i<=K;i++) {
    for (let j = 0; j<=target; j++) {
      if (i === 1) {
        memo[i][j] = 1;
        continue;
      }

      memo[i][j] = memo[i - 1]
        .slice(0, j + 1)
        .reduce((sum, curr) => sum + curr, 0) % DIVIDER;
    }
  }

  return memo[K][target];
}

console.log(solution(inputs));
