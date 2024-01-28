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
    const numbers = inputs.shift().sort((a, b) => a - b);

    answer.push([numbers[0], numbers[N - 1]]);
  }

  return answer.map(result => result.join(' ')).join('\n');
}

console.log(solution(inputs));
