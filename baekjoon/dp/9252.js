// 최장 부분 수열

const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const [first, second] = inputs;

  const memo = Array.from({length: first.length + 1}, () => Array(second.length + 1).fill(0));

  for (let i =0; i<=first.length; i++) {
    for (let j = 0; j<=second.length; j++) {
      if (i === 0 || j === 0) {
        memo[i][j] = 0;
        continue;
      }

      if (first[i - 1] === second[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1] + 1;
      } else {
        memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
      }
    }
  }

  let result = '';
  let i = first.length;
  let j = second.length;

  while (i !== 0 && j !== 0) {
    const current = memo[i][j];

    if (current === memo[i - 1][j]) {
      i -= 1;
    } else if (current === memo[i][j - 1]) {
      j -= 1;
    } else if (memo[i - 1][j] === memo[i][j -1]) {
      i -= 1;
      j -= 1;
      result += first[i];
    }
  }

  return [memo[first.length][second.length], result];
}

const [answer, result] = solution(inputs);

console.log(answer);

console.log(answer ? result.split('').reverse().join('') : '');

