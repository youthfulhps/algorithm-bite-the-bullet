const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  let answer = 0;

  const [X, Y] = inputs.shift();
  const map = inputs;

  const shapeSizes = [0];


  const zeroPoints = [];

  // 0을 가진 좌표를 구한다.
  traversal((x, y) => {
    if (map[x][y] === 0) {
      zeroPoints.push([x, y]);
    }
  })

  // 초기 구조의 모양의 크기를 구한다.
  const visit = Array.from({length: X}, () => Array(Y).fill(0));

  let shapeNumber = 1;

  traversal((x, y) => {
    const queue = [];
    let shapeSize = 0;
    if (map[x][y] === 1 && !visit[x][y]) {
      queue.push([x, y]);
      shapeSize++;
      visit[x][y] = shapeNumber;

      while (queue.length) {
        const [currentX, currentY] = queue.shift();

        for (let k = 0; k < 4; k++) {
          const nextX = currentX + dx[k];
          const nextY = currentY + dy[k];

          if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
            if (map[nextX][nextY] && !visit[nextX][nextY]) {
              queue.push([nextX, nextY]);
              shapeSize++;
              visit[nextX][nextY] = shapeNumber;
            }
          }
        }
      }

      shapeSizes[shapeNumber] = shapeSize;
      shapeNumber++;
    }
  })

  zeroPoints.forEach(([x, y]) => {
    const includedShapeNumbers = [];
    let areaSum = 1;
    for (let k = 0; k < 4; k++) {
      const nextX = x + dx[k];
      const nextY = y + dy[k];

      if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
        const shapeNumber = visit[nextX][nextY];
        if (shapeNumber && !includedShapeNumbers.includes(shapeNumber)) {
          areaSum += shapeSizes[shapeNumber];
          includedShapeNumbers.push(shapeNumber);
        }
      }
    }

    answer = Math.max(answer, areaSum);
  })

  function traversal(callback) {
    for (let x = 0; x < X; x++) {
      for (let y = 0; y < Y; y++) {
        callback(x, y);
      }
    }
  }


  return answer;
}

console.log(solution(inputs));
