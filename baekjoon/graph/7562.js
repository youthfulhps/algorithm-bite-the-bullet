const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [2, 2, -2, -2, 1, 1, -1, -1];
const dy = [1, -1, 1, -1, 2, -2, 2, -2];

function solution(inputs) {
  const T = inputs.shift()[0];
  const result = [];

  for (let t = 0; t < T; t++) {
    const size = inputs.shift()[0];
    const [startX, startY] = inputs.shift();
    const [endX, endY] = inputs.shift();
    const visit = Array.from({length: size}, () => Array(size).fill(0));

    const queue = [[startX, startY]];
    visit[startX][startY] = 0;

    while (queue.length) {
      const [currentX, currentY] = queue.shift();
      if (currentX === endX && currentY === endY) {
        result.push(visit[endX][endY]);
        break;
      }

      for (let k = 0; k<8; k++) {
        const nextX = currentX + dx[k];
        const nextY = currentY + dy[k];
        if (nextX >= 0 && nextX < size && nextY >= 0 && nextY < size) {
          if (!visit[nextX][nextY]) {
            visit[nextX][nextY] = visit[currentX][currentY] + 1;
            queue.push([nextX, nextY]);
          }
        }
      }
    }
  }

  return result;
}

solution(inputs).forEach(result => console.log(result));
