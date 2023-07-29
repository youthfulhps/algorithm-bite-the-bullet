const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(inputs) {
  const [N, minDiff, maxDiff] = inputs.shift();
  const visit = Array.from({length: N}, () => Array(N).fill(0));
  const map = inputs;
  let result = 0;
  // O(N^2) BFS

  while (true) {
    const visit = Array.from({length: N}, () => Array(N).fill(0));
    const queue = [];
    let openCount = 0;
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (visit[x][y]) {
          continue;
        }


        queue.push([x, y]);
        visit[x][y] = 1;
        const shared = BFS();

        if (shared.length >= 2) {
          shareCitizen(shared);
          openCount++;
        }
      }
    }

    if (!openCount) {
      break;
    }

    result++;

    function BFS() {
      const shared = [];
      while (queue.length) {
        const [currentX, currentY] = queue.shift();

        if (!shared.length) {
          shared.push([currentX, currentY]);
        }


        for (let k = 0; k < 4; k++) {
          const nextX = currentX + dx[k];
          const nextY = currentY + dy[k];

          if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N) {
            if (!visit[nextX][nextY]) {
              const localDiff = Math.abs(map[nextX][nextY] - map[currentX][currentY]);
              if (localDiff >= minDiff && localDiff <= maxDiff) {
                  shared.push([nextX, nextY]);
                  queue.push([nextX, nextY]);
                  visit[nextX][nextY] = 1;
              }
            }
          }
        }
      }

      return shared;
    }

    function shareCitizen(shared) {
      const sum = shared.reduce((sum, [x, y]) => map[x][y] + sum, 0);
      const average = Math.floor(sum / shared.length);
      shared.forEach(([x, y]) => {
        map[x][y] = average;
      })
    }
  }

  return result;
}

console.log(solution(inputs));
