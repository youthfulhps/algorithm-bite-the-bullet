const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(''));

const FINISH = 'D';
const START = 'S';

const EMPTY = '.';
const WATER = '*';
const STONE = 'X';

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  const [X, _, Y] = inputs.shift().map(Number);
  let map = inputs;
  let startPoint = null;
  let finishPoint = null;

  const visit = Array.from({length: X}, () => Array(Y).fill(0));
  const queue = [];

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (map[x][y] === START) {
        startPoint = [x, y];
      }

      if (map[x][y] === FINISH) {
        finishPoint = [x, y];
      }
    }
  }

  const [startX, startY] = startPoint;
  const [finishX, finishY] = finishPoint;

  queue.push([startX, startY]);

  visit[startX][startY] = 1;

  while (queue.length) {
    overflowWater();
    const batchSize = queue.length;

    for (let i = 0; i <batchSize; i++) {
      const [currentX, currentY] = queue.shift();

      if (currentX === finishX && currentY === finishY) {
        break;
      }

      for (let k = 0; k < 4; k++) {
        const nextX = currentX + dx[k];
        const nextY = currentY + dy[k];

        if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
          if (!visit[nextX][nextY] && [EMPTY, FINISH].includes(map[nextX][nextY])) {
            queue.push([nextX, nextY]);
            visit[nextX][nextY] = visit[currentX][currentY] + 1;
          }
        }
      }
    }
  }

  function overflowWater() {
    const overflowArea = [];
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        if (map[x][y] === WATER) {
          for (let k = 0; k < 4; k++) {
            const nextX = x + dx[k];
            const nextY = y + dy[k];

            if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
              if (![STONE, FINISH].includes(map[nextX][nextY])) {
                overflowArea.push([nextX, nextY]);
              }
            }
          }
        }
      }
    }

    overflowArea.forEach(([x, y]) => {
      map[x][y] = WATER;
    })
  }

  const answer = visit[finishX][finishY];

  return answer ? answer - 1 : 'KAKTUS';
}



console.log(solution(inputs));
