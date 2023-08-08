

// 3
// 5

const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const OUTSIDE = -2;
const INSIDE = -1;

function solution(inputs) {
  const [X, Y] = inputs.shift();
  let map = inputs;
  let days = 0;
  let cheeseCount = 0;
  let lastCheeseCount = 0;

  // 치즈 갯수를 센다.
  // 바깥공기와 안공기를 구분하여 맵에 설정한다.
  // 바깥공기와 맞닿은 영역을 녹인다.
  // 녹은 영역의 수 - 남은 치즈 갯수가 음수가 되는 시점의 녹은 영역의 수가 두번째 답.
  // 반복.

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (map[x][y] === 1) {
        cheeseCount++;
      }
    }
  }


  while (cheeseCount >= 0) {
    separateInAndOut();
    const target = getMeltedArea();
    target.forEach(([x, y]) => map[x][y] = 0);
    days++;
    reset();

    if (cheeseCount - target.length > 0) {
      cheeseCount -= target.length;
    } else {
      lastCheeseCount = cheeseCount;
      break;
    }



    function getMeltedArea() {
      const target = [];

      for (let x = 0; x < X; x++) {
        for (let y = 0; y < Y; y++) {
          if (map[x][y] === 1) {
            for (let k = 0; k < 4; k++) {
              const nextX = x + dx[k];
              const nextY = y + dy[k];

              if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
                if (map[nextX][nextY] === OUTSIDE) {
                  target.push([x, y]);
                  break;
                }
              }
            }
          }
        }
      }

      return target;
    }


    function separateInAndOut() {
      const stack = [[0, 0]];
      map[0][0] = OUTSIDE;

      while (stack.length) {
        const [currentX, currentY] = stack.shift();

        for (let k = 0; k < 4; k++) {
          const nextX = currentX + dx[k];
          const nextY = currentY + dy[k];

          if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
            if (!map[nextX][nextY]) {
              stack.push([nextX, nextY]);
              map[nextX][nextY] = OUTSIDE;
            }
          }
        }
      }

      for (let x = 0; x < X; x++) {
        for (let y = 0; y < Y; y++) {
          if (map[x][y] === 0) {
            map[x][y] = INSIDE;
          }
        }
      }
    }
  }

  function reset() {
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        if ([OUTSIDE, INSIDE].includes(map[x][y])) {
          map[x][y] = 0;
        }
      }
    }
  }

  return [days, lastCheeseCount];
}

solution(inputs).forEach(answer => console.log(answer));
