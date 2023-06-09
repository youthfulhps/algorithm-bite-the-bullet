const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const N = inputs.shift();
  const numbers = inputs;

  const memo = [];
  let cnt = 0;

  for (let i = 0; i<N; i++) {
    if (i === 0) {
      memo.push(numbers[i]);
      continue;
    }

    if (numbers[i] > memo[memo.length - 1]) {
      memo.push(numbers[i]);
    } else {
      const lowerIndex = lowerBound(memo, numbers[i]);
      memo[lowerIndex] = numbers[i];
      cnt++;
    }
  }

  return cnt;
}

function lowerBound(numbers, targetValue) {
  let start = 0;
  let end = numbers.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (numbers[mid] >= targetValue) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

console.log(solution(inputs));
