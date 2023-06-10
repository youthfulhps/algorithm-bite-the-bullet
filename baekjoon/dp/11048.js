const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [X, Y] = inputs.shift();
  const map = inputs;

  const memo = Array.from({length: X + 1}, () => Array(Y + 1).fill(0));

  for (let x = 1; x<=X; x++) {
    for (let y = 1; y<=Y;y++) {
      memo[x][y] = Math.max(...[memo[x - 1][y], memo[x][y - 1], memo[x - 1][y - 1]]) + map[x - 1][y - 1];
    }
  }

  return memo[X][Y];
}

console.log(solution(inputs));
