const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const numbers = inputs.shift();
  const MAX_VALUE = Number.MAX_SAFE_INTEGER;

  const memo = Array(N).fill(0);

  for (let i =0; i<N;i++) {
    if (i === 0) {
      memo[i] = 0;
      continue;
    }

    let minPrevJumpCount = MAX_VALUE;

    for (let j =0; j<i; j++) {
      if (j + numbers[j] >= i) {
        minPrevJumpCount = Math.min(minPrevJumpCount, memo[j]);
      }
    }

    if (minPrevJumpCount === MAX_VALUE) {
      return -1;
    } else {
      memo[i] = minPrevJumpCount + 1;
    }
  }

  return memo[N - 1];
}

console.log(solution(inputs));
