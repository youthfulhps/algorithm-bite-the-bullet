const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  // dfs, 최대로 갈 수 있는 거리까지 탐색하기 위해서
  // visit, 맵의 그 지점까지 지나쳐온 칸의 갯수
  const [X, Y] = inputs.shift().split(' ').map(Number);
  const map = inputs.map(input => input.split('').map(Number));
  const visit = Array.from({length: X}, () => Array(Y).fill(0));
  const queue = [[0, 0]];

  visit[0][0] = 1;
  while (queue.length) {
    const [currentX, currentY] = queue.shift();
    BFS(currentX, currentY);
  }

  function BFS(currentX, currentY) {
    for (let i = 0; i<4; i++) {
      const nextX = currentX + dx[i];
      const nextY = currentY + dy[i];

      if (nextX >= 0 && nextX < X && nextY >=0 && nextY < Y) {
        if (map[nextX][nextY] && !visit[nextX][nextY]) {
          visit[nextX][nextY] = visit[currentX][currentY] + 1;
          queue.push([nextX, nextY]);
        }
      }
    }
  }

  return visit[X - 1][Y - 1];
}

console.log(solution(inputs));
