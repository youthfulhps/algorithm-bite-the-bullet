const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const WEAPON = 2;
const EMPTY = 0;

function solution(inputs) {
  const [X, Y, T] = inputs.shift();
  const map = inputs;
  let weaponPosition = null;

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (map[x][y] === WEAPON) {
        weaponPosition = [x, y];
      }
    }
  }

  const [weaponX, weaponY] = weaponPosition;

  function BFS(startX, startY, endX, endY, hasWeapon) {
    const visit = Array.from({length: X}, () => Array(Y).fill(0));

    const queue = [[startX, startY]];
    visit[startX][startY] = 1;

    while (queue.length) {
      const [currentX, currentY] = queue.shift();

      if (currentX === endX && currentY === endY) {
        return visit[currentX][currentY] - 1;
      }

      for (let k = 0; k < 4; k++) {
        const nextX = currentX + dx[k];
        const nextY = currentY + dy[k];

        if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
          if ((hasWeapon || [EMPTY, WEAPON].includes(map[nextX][nextY])) && !visit[nextX][nextY]) {
            queue.push([nextX, nextY]);
            visit[nextX][nextY] = visit[currentX][currentY] + 1;
          }
        }
      }
    }

    return visit[endX][endY] - 1;
  }

  const result = [];
  const timeWithoutWeapon = BFS(0, 0, X - 1, Y - 1, false);

  if (timeWithoutWeapon > 0 && timeWithoutWeapon <= T) {
    result.push(timeWithoutWeapon);
  }

  let timeWithWeapon = BFS(0, 0, weaponX, weaponY, false);

  if (timeWithWeapon > 0) {
    timeWithWeapon += BFS(weaponX, weaponY, X - 1, Y - 1, true);
  }

  if (timeWithWeapon > 0 && timeWithWeapon <= T) {
    result.push(timeWithWeapon);
  }

  return result.length ? Math.min(...result) : 'Fail'
}

console.log(solution(inputs));
