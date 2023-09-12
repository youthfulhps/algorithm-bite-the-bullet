const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [C, N] = inputs.shift();
  const memo = Array.from({length: C + 1}, () => Number.MAX_SAFE_INTEGER);
  memo[0] = 0;

  for (let [cost, gain] of inputs) {
    if (memo[gain] > cost) {
      memo[gain] = cost;
    }
    for (let i = 1; i <= C; i++) {
      memo[i] = i < gain
        ? Math.min(memo[i], cost)
        : Math.min(memo[i], memo[gain] + memo[i - gain])
    }
  }
  return memo[C];
}

console.log(solution(inputs));
