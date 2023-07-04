const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const T = Number(inputs.shift());
  let result = [];

  for (let t = 0; t<T; t++) {
    const [X, Y, cabbageCount] = inputs.shift().split(' ').map(Number);
    const map = Array.from({length: X}, () => Array(Y).fill(0));
    const visit = Array.from({length: X}, () => Array(Y).fill(0));

    let groupCount = 0;

    for (let i = 0; i<cabbageCount;i++) {
      const [posX, posY] = inputs.shift().split(' ').map(Number);
      map[posX][posY] = 1;
    }

    for (let x = 0; x<X; x++) {
      for (let y = 0; y<Y; y++) {
        if (map[x][y] && !visit[x][y]) {
          groupCount++;
          DFS(x, y);
        }
      }
    }

    function DFS(currentX, currentY) {
      if (currentX >= 0 && currentX < X && currentY >= 0 && currentY < Y) {
        if (map[currentX][currentY] && !visit[currentX][currentY]) {
          visit[currentX][currentY] = 1;
          DFS(currentX + 1, currentY);
          DFS(currentX - 1, currentY);
          DFS(currentX, currentY + 1);
          DFS(currentX, currentY - 1);
        }
      }
    }

    result.push(groupCount);
  }

  return result;
}

solution(inputs).forEach(result => console.log(result));
