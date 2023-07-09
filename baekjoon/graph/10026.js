const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  const N = Number(inputs.shift());
  const map = inputs;
  const result = [];

  for (let i = 0; i < 2; i++) {
    const visit = Array.from({length: N}, () => Array(N).fill(0));
    const isNormal = i === 0;
    let areaCount = 0;

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (!visit[x][y]) {
          DFS(x, y, map[x][y]);
          areaCount++;
        }
      }
    }

    result.push(areaCount);

    function DFS(currentX, currentY, prevColor) {
      if (currentX >= 0 && currentX < N && currentY >= 0 && currentY < N) {
        let currentColor = map[currentX][currentY];
        if (!isNormal) {
          currentColor = map[currentX][currentY] === 'G' ? 'R' : currentColor;
          prevColor = prevColor === 'G' ? 'R' : prevColor;
        }

        if (!visit[currentX][currentY] && currentColor === prevColor) {
          visit[currentX][currentY] = 1;
          DFS(currentX + 1, currentY, currentColor);
          DFS(currentX - 1, currentY, currentColor);
          DFS(currentX, currentY + 1, currentColor);
          DFS(currentX, currentY - 1, currentColor);
        }
      }
    }
  }

  return result;
}

console.log(solution(inputs).join(' '));
