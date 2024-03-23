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
    const arr = inputs.shift();
    const memo = Array.from({length: N}, () => 0);
    memo[0] = arr[0];

    for (let i = 1; i < N; i++) {
      memo[i] = Math.max(memo[i - 1] + arr[i], arr[i]);
    }

    answer.push(Math.max(...memo));
  }

  return answer.join('\n');
}

console.log(solution(inputs));
