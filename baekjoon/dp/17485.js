const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const dx = [-1, -1, -1];
const dy = [-1, 0, 1];

const MAX = 1000 * 100;

function solution(inputs) {
  const [X, Y] = inputs.shift();
  const map = inputs;
  const memo = Array.from({length: X},
    () => Array.from({length: Y},
      () => Array(3).fill(Infinity)
    )
  );

  for (let y = 0; y < Y; y++) {
    memo[0][y] = Array(3).fill(map[0][y]);
  }

  // memo (이전에) [1번, 2번, 3번] 방향으로 움직여 현재 자리에 도착한 연료 값
  // 다음 움직일 때는 해당 값을 제외하고 움직여야 한다.

  for (let x = 1; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      for (let i = 0; i < 3; i++) {
        let current = MAX;

        const prevX = x + dx[i];
        const prevY = y + dy[i];

        if (prevX < 0 || prevX >= X || prevY < 0 || prevY >= Y) continue;

        for (let t = 0; t < 3; t++) {
          if (t !== i) {
            current = Math.min(current, memo[prevX][prevY][t]);
          }
        }

        memo[x][y][i] = Math.min(memo[x][y][i], current + map[x][y]);
      }
    }
  }

  let result = MAX;

  memo[X - 1].forEach(m => {
    result = Math.min(...[result, ...m]);
  });

  return result;
}

console.log(solution(inputs));
