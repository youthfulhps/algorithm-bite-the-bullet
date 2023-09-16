const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const answer = [];
  const [N, M] = inputs.shift();
  const memo = Array.from({length: N + 1}, () => Array(N + 1).fill(0));

  const map = [Array(N + 1).fill(0)];

  inputs.forEach(input => {
    map.push([0, ...input]);
  })

  for (let i = 0; i < N; i++) {
    map.push([0, ...inputs.shift()])
  }

  const points = inputs;

  for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= N; y++) {
      memo[x][y] = memo[x][y - 1]
        + memo[x - 1][y]
        + map[x][y]
        - memo[x - 1][y - 1];
    }
  }

  points.forEach(([startX, startY, endX, endY]) => {
    const partSum = memo[endX][endY] -
      memo[endX][startY - 1] -
      memo[startX - 1][endY] +
      memo[startX - 1][startY - 1];

    answer.push(partSum);
  })

  return answer.join('\n')
}

console.log(solution(inputs));
