const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const WALL = '#';
const EMPTY = '.';
const START = 'J';
const FIRE = 'F';

function solution(inputs) {
  const [X, Y] = inputs.shift().split(' ').map(Number);
  const map = inputs.map(input => input.split(''));
  const queue = [];

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (map[x][y] === START) {
        queue.push([x, y]);
        map[x][y] = EMPTY;
      }
    }
  }

  const [startX, startY] = queue[0];
  if (isEscapePosition(startX, startY)) {
    return 1;
  }

  const visit = Array.from({length: X}, () => Array(Y).fill(0));
  visit[startX][startY] = 1;

  while(queue.length) {
    spread();
    const batchSize = queue.length;

    for (let i = 0; i < batchSize; i++) {
      const [currentX, currentY] = queue.shift();

      if (isEscapePosition(currentX, currentY)) {
        return visit[currentX][currentY];
      }

      for (let k = 0; k < 4; k++) {
        const nextX = currentX + dx[k];
        const nextY = currentY + dy[k];

        if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
          if (map[nextX][nextY] === EMPTY && !visit[nextX][nextY]) {
            queue.push([nextX, nextY]);
            visit[nextX][nextY] = visit[currentX][currentY] + 1;
          }
        }
      }
    }
  }

  function isEscapePosition(currentX, currentY) {
    return currentX === 0 || currentY === 0 || currentX === X - 1 || currentY === Y - 1;
  }

  function spread() {
    const nextFire = [];
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        if (map[x][y] === FIRE) {
          for (let k = 0; k < 4; k++) {
            const nextX = x + dx[k];
            const nextY = y + dy[k];

            if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
              if (map[nextX][nextY] !== WALL) {
                nextFire.push([nextX, nextY]);
              }
            }
          }
        }
      }
    }

    nextFire.forEach(([nextX, nextY]) => {
      map[nextX][nextY] = FIRE;
    })
  }

  return 'IMPOSSIBLE';
}

console.log(solution(inputs));
