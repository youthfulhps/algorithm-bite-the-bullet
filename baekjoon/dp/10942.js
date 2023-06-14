const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const numbers = inputs.shift();
  const questionCount = inputs.shift();
  const questions = inputs;

  const result = [];

  const memo = Array.from({length: N +1 }, () => Array(N + 1).fill(0));

  for (let i =0; i<N;i++) {
    memo[i][i] = 1;
  }

  for (let start = 0; start<N;start++) {
    for (let end = start; end < N; end++) {
      if (end - start === 1 && numbers[end] === numbers[start]) {
        memo[start][end] = 1;
        continue;
      }

      if (memo[start + 1][end - 1] === 1) {
        if (numbers[start] === numbers[end]) {
          memo[start][end] = 1;
        }
      }
    }
  }

  questions.forEach(([i, j]) => {
    result.push(memo[i - 1][j - 1]);
  })

  return result;
}


solution(inputs).forEach(result => console.log(result));
