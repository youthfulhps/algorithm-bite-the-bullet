const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const numbers = inputs.shift();

  const memo = [];
  const indexes = [];

  function lowerBound(targetValue) {
    let start = 0;
    let end = memo.length;

    while (start<end) {
      let mid = Math.floor((start + end) / 2);

      if (memo[mid] >= targetValue) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    return end;
  }

  for (let i = 0; i<N;i++) {
    if (i === 0) {
      memo.push(numbers[i]);
      indexes.push(i);
      continue;
    }
    if (numbers[i] > memo[i]) {
      indexes.push(i);
      memo.push(numbers[i]);
    } else {
      const targetIndex = lowerBound(numbers[i]);
      indexes.push(targetIndex);
      memo[targetIndex] = numbers[i];
    }
  }

  let lis = [];

  let lisLength = memo.length;
  for (let i =N - 1; i>=0;i--) {
    if (lisLength === indexes[i] + 1) {
      lis.push(numbers[i]);
      lisLength--;
    }
  }

  return [memo.length, lis.reverse().join(' ')];
}

solution(inputs).forEach(result => console.log(result));
