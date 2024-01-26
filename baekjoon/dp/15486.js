const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const memo = Array(N + 1).fill(0);

  let max = 0;

  for (let i = 0; i < N; i++) {
    max = Math.max(max, memo[i]);

    const [duration, pay] = inputs[i];
    if (i + duration <= N) {
      memo[i + duration] = Math.max(memo[i + duration], max + pay);
    }
  }

  return Math.max(...memo);
}

console.log(solution(inputs));
