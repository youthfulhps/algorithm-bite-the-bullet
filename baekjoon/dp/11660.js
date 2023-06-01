const [[N, M], ...inputs] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const map = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

  inputs.slice(0, N).forEach((row, x) => {
    row.forEach((cell, y) => {
      map[x + 1][y + 1] = cell;
    });
  });

  for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= N; y++) {
      map[x][y] += map[x - 1][y] + map[x][y - 1] - map[x - 1][y - 1];
    }
  }

  const coords = inputs.slice(N);
  const result = [];

  coords.forEach(([x1, y1, x2, y2]) => {
    result.push(map[x2][y2] - map[x1 - 1][y2] - map[x2][y1 - 1] + map[x1 - 1][y1 - 1]);
  });

  return result;
}

console.log(solution(inputs).join('\n'));

