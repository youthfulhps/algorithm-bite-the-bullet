const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const N = inputs.shift();
  const wines = [0, ...inputs];
  const memo = Array.from({length: N + 1}, () => 0);

  memo[0] = 0;
  memo[1] = wines[1];
  memo[2] = wines[1] + wines[2];

  for (let i = 3; i <= N; i++) {
    memo[i] = Math.max(
      memo[i - 2] + wines[i],
      memo[i - 3] + wines[i - 1] + wines[i],
      memo[i - 1],
      )
  }

  return memo[N];
}

console.log(solution(inputs));
