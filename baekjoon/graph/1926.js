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
  let map = inputs;
  let total = 0;
  let max = 0;

  const visit = Array.from({length: X}, () => Array(Y).fill(0));

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      const stack = [];
      if (map[x][y] && !visit[x][y]) {
        stack.push([x, y]);
        visit[x][y] = 1;
        let area = 0;
        total++;

        while (stack.length) {
          const [currentX, currentY] = stack.shift();
          area++;

          for (let k = 0; k < 4; k++) {
            const nextX = currentX + dx[k];
            const nextY = currentY + dy[k];

            if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
              if (map[nextX][nextY] && !visit[nextX][nextY]) {
                stack.push([nextX, nextY]);
                visit[nextX][nextY] = 1;
              }
            }
          }
        }

        max = Math.max(max, area);
      }
    }
  }

  return [total, max];
}

console.log(solution(inputs).join('\n'));
