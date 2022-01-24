const inputs = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");

const [height, width] = inputs.shift().split(" ").map(Number);

const [nowX, nowY, direction] = inputs.shift().split(" ").map(Number);

const board = inputs.map((input) => input.split(" ").map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

//        0
//        ^
//        |
// 3 <---  ---> 1
//        |
//        v
//        2

function getNextDirection(direction) {
  return direction - 1 < 0 ? 3 : direction - 1;
}

let result = 0;

const visit = Array.from({ length: height }, () => Array(width).fill(0));

function solution(nowX, nowY, direction, count) {
  let checkCount = 0;

  visit[nowX][nowY] = 1;

  for (let i = 0; i < 4; i++) {
    const nextDirection = getNextDirection(direction);
    const nextX = nowX + dx[nextDirection];
    const nextY = nowY + dy[nextDirection];

    if (board[nextX][nextY] === 0 && visit[nextX][nextY] === 0) {
      flag = true;
      visit[nextX][nextY] = 1;

      solution(nextX, nextY, nextDirection, count + 1);
      break;
    } else {
      direction = nextDirection;
      checkCount += 1;
    }
  }

  //if all direction are clean or wall,
  if (checkCount === 4) {
    const backDirection = getNextDirection(getNextDirection(direction));
    const nextX = nowX + dx[backDirection];
    const nextY = nowY + dy[backDirection];

    if (board[nextX][nextY] === 1) {
      result = count;
      return;
    }
    solution(nextX, nextY, direction, count);
  }
}

solution(nowX, nowY, direction, 1);

console.log(result);
