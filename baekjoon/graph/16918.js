const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')

const BOMB = 'O';
const EMPTY = '.';

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  const [X, Y, T] = inputs.shift().split(' ').map(Number);
  let map = inputs.map(input => input.split(''));

  const visit = Array.from({length: X}, () => Array(Y).fill(0));

  let time = 1;

  while (T >= time) {
    updateBombTime();

    if (time === 1) {
      time++;
      continue;
    } else {
      if (time % 2 === 0) {
        plantBomb();
      } else {
        explodeBomb();
      }
    }

    time++;
  }

  function updateBombTime() {
    traversal((x, y) => {
      if (map[x][y] === BOMB) {
        visit[x][y] += 1;
      }
    })
  }

  function plantBomb() {
    traversal((x, y) => {
      if (map[x][y] === EMPTY) {
        map[x][y] = BOMB;
        visit[x][y] = 1;
      }
    })
  }

  function explodeBomb() {
    let target = [];
    traversal((x, y) => {
      if (visit[x][y] >= 3) {
        target.push([x, y]);
        for (let k = 0; k < 4; k++) {
          const nextX = x + dx[k];
          const nextY = y + dy[k];

          if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
            if (map[nextX][nextY] === BOMB) {
              target.push([nextX, nextY]);
            }
          }
        }
      }
    })

    target.forEach(([x, y]) => {
      map[x][y] = EMPTY;
      visit[x][y] = 0;
    })
  }

  function traversal(callback) {
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        callback(x, y);
      }
    }
  }

  return map;
}

solution(inputs).forEach(m => console.log(m.join('')));
