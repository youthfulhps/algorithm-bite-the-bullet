const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  const [X, Y, K] = inputs.shift();
  const map = Array.from({length: X}, () => Array(Y).fill(0));

  let answer = 0;

  inputs.forEach(([x, y]) => {
    map[x - 1][y - 1] = 1;
  })

  const visit = Array.from({length: X}, () => Array(Y).fill(0));

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (map[x][y] && !visit[x][y]) {
        const queue = [[x, y]];
        visit[x][y] = 1;
        let count = 0;

        while (queue.length) {
          count++;
          const [currentX, currentY] = queue.shift();

          for (let k = 0; k < 4; k++) {
            const nextX = currentX + dx[k];
            const nextY = currentY + dy[k];

            if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
              if (map[nextX][nextY] && !visit[nextX][nextY]) {
                queue.push([nextX, nextY]);
                visit[nextX][nextY] = 1;
              }
            }
          }
        }

        answer = Math.max(answer, count);
      }
    }
  }

  return answer;
}

console.log(solution(inputs));
