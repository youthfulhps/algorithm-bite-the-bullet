const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  const [X, Y] = inputs.shift();
  const map = inputs;
  const visit = Array.from({length: X}, () => Array(Y).fill(0));

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (map[x][y] === 2) {
        const queue = [[x, y]];
        visit[x][y] = 1;

        while (queue.length) {
          const [currentX, currentY] = queue.shift();

          for (let k = 0; k < 4; k++) {
            const nextX = currentX + dx[k];
            const nextY = currentY + dy[k];

            if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
              if (!visit[nextX][nextY] && map[nextX][nextY]) {
                queue.push([nextX, nextY]);
                visit[nextX][nextY] = visit[currentX][currentY] + 1;
              }
            }
          }
        }
      }
    }
  }

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (visit[x][y]) {
        visit[x][y] -= 1;
      } else {
        if (map[x][y]) {
          visit[x][y] = -1;
        }
      }
    }
  }

  return visit;
}

solution(inputs).forEach(result => console.log(result.join(' ')));
