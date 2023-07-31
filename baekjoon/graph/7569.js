const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

const UNRIPE = 0;
const RIPE = 1;
const EMPTY = -1;

function solution(inputs) {
  const [Y, X, Z] = inputs.shift();
  const map = [];

  for (let i = 0; i < Z; i++) {
    let tmp = [];
    for (let j = 0; j < X; j++) {
      tmp.push(inputs.shift());
    }

    map.push(tmp);
  }

  const visit = Array.from({length: Z},
    () => Array.from({length: X}, () => Array(Y).fill(0)));

  const queue = [];

  for (let z = 0; z < Z; z++) {
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        if (map[z][x][y] === RIPE) {
          queue.push([z, x, y]);
          visit[z][x][y] = 1;
        };
      }
    }
  }

  while (queue.length) {
    const batchSize = queue.length;

    for (let i = 0; i < batchSize; i++) {
      const [currentZ, currentX, currentY] = queue.shift();

      for (let k = 0; k < 6; k++) {
        const nextZ = currentZ + dz[k];
        const nextX = currentX + dx[k];
        const nextY = currentY + dy[k];

        if (
          nextZ >= 0 && nextZ < Z &&
          nextX >= 0 && nextX < X &&
          nextY >= 0 && nextY < Y
        ) {
          if (!visit[nextZ][nextX][nextY]) {
            if (map[nextZ][nextX][nextY] === UNRIPE) {
              queue.push([nextZ, nextX, nextY]);
              visit[nextZ][nextX][nextY] = visit[currentZ][currentX][currentY] + 1;
            }

            else if (map[nextZ][nextX][nextY] === EMPTY) {
              visit[nextZ][nextX][nextY] = -1;
            }
          }
        }
      }
    }
  }

  let max = 0;
  let hasZero = false;

  for (let z = 0; z < Z; z++) {
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        if (visit[z][x][y] === 0) {
          hasZero = true;
          break;
        }

        max = Math.max(max, visit[z][x][y]);
      }
    }
  }

  return hasZero ? -1 : max - 1;
}

console.log(solution(inputs));
