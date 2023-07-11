const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [X, Y] = inputs.shift();
  const map = inputs;

  const result = [];

  const VIRUS = 2;
  const WALL = 1;


  const empty = [];

  // 벽을 세울 수 있는 공간
  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (!map[x][y]) empty.push([x, y]);
    }
  }

  for (let i = 0; i < empty.length; i++) {
    for (let j = i + 1; j < empty.length; j++) {
      for (let k = j + 1; k < empty.length; k++) {
        // 시작할 때 벽을 세우고,
        map[empty[i][0]][empty[i][1]] = 1;
        map[empty[j][0]][empty[j][1]] = 1;
        map[empty[k][0]][empty[k][1]] = 1;

        const visit = Array.from({length: X}, () => Array(Y).fill(0));

        for (let x = 0; x < X; x++) {
          for (let y = 0; y < Y; y++) {
            if (!visit[x][y]) {
              if (map[x][y] === WALL) {
                visit[x][y] = WALL;
                continue;
              }

              if (map[x][y] === VIRUS) {
                DFS(x, y);
              }
            }
          }
        }

        function DFS(currentX, currentY) {
          if (currentX >= 0 && currentX < X && currentY >= 0 && currentY < Y) {
            if (map[currentX][currentY] !== WALL && !visit[currentX][currentY]) {
              visit[currentX][currentY] = VIRUS;
              DFS(currentX + 1, currentY);
              DFS(currentX - 1, currentY);
              DFS(currentX, currentY + 1);
              DFS(currentX, currentY - 1);
            }
          }
        }

        let zeroCount = 0;

        for (let x = 0; x < X; x++) {
          for (let y = 0; y < Y; y++) {
            if (visit[x][y] === 0) {
              zeroCount++;
            }
          }
        }

        result.push(zeroCount);

        // 끝나고 다시 되돌려 놓는다.
        map[empty[i][0]][empty[i][1]] = 0;
        map[empty[j][0]][empty[j][1]] = 0;
        map[empty[k][0]][empty[k][1]] = 0;
      }
    }
  }

  return Math.max(...result);
}

console.log(solution(inputs));
