const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const answer = [];
  const T = inputs.shift()[0];

  for (let t = 0; t < T; t++) {
    const N = inputs.shift()[0];
    const numbers = [];

    numbers.push(inputs.shift());
    numbers.push(inputs.shift());

    const memo = Array.from({length: 2}, () => Array(N).fill(0));

    memo[0][0] = numbers[0][0];
    memo[1][0] = numbers[1][0];
    memo[0][1] = memo[1][0] + numbers[0][1];
    memo[1][1] = memo[0][0] + numbers[1][1];

    for (let i = 2; i < N; i++) {
      memo[0][i] = Math.max(memo[1][i - 2], memo[1][i - 1]) + numbers[0][i];
      memo[1][i] = Math.max(memo[0][i - 2], memo[0][i - 1]) + numbers[1][i];
    }

    answer.push(Math.max(memo[0][N - 1], memo[1][N - 1]));
  }

  return answer.join('\n')
}

console.log(solution(inputs));
