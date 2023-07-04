const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function solution(inputs) {
  const N = Number(inputs.shift());
  const map = inputs.map(input => input.split('').map(Number));
  let result = 0;
  let complexCount = [];
  const visit = Array.from({length: N}, () => Array(N).fill(0));

  for (let x = 0; x<N; x++) {
    for (let y = 0; y<N; y++) {
      if (map[x][y] && !visit[x][y]) {
        DFS(x, y);

        if (result) {
          complexCount.push(result);
          result = 0;
        }
      }
    }
  }

  function DFS(currentX, currentY) {
    if (currentX >= 0 && currentX < N && currentY >= 0 && currentY < N) {
      if (map[currentX][currentY] && !visit[currentX][currentY]) {
        visit[currentX][currentY] = 1;
        result++;
        DFS(currentX + 1, currentY);
        DFS(currentX - 1, currentY);
        DFS(currentX, currentY + 1);
        DFS(currentX, currentY - 1);
      }
    }
  }

  return complexCount.sort((a, b) => a - b);
}

const complexCount = solution(inputs);

console.log(complexCount.length);
complexCount.forEach(result => console.log(result));
