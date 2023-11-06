const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const monkeyDX = [1, -1, 0, 0];
const monkeyDY = [0, 0, 1, -1];
const horseDX = [1, 2, -1, -2, -1, -2, 1, 2];
const horseDY = [2, 1, 2, 1, -2, -1, -2, -1];

function solution(inputs) {
  // bfs, 최소한의 동작을 찾기 때문
  // 이차 행렬 -> 최악의 경우 모든 지점을 순회할 가능성 -> O(n^2)
  const K = inputs.shift()[0];
  const [Y, X] = inputs.shift();
  const map = inputs;

  const visit = Array.from({length: X},
    () => Array.from({length: Y},
      () => Array(K + 1).fill(0)));

  if (X === 1 && Y === 1 && !map[0][0]) {
    return 0;
  }

  const queue = [];
  queue.push([0, 0, 0]);

  for (let i = 0; i <= K; i++) {
    visit[0][0][i] = 1;
  }

  while (queue.length) {
    const [currentX, currentY, currentUsed] = queue.shift();

    for (let k = 0; k < 4; k++) {
      const nextX = currentX + monkeyDX[k];
      const nextY = currentY + monkeyDY[k];

      if (nextX < 0 || nextX >= X || nextY < 0 || nextY >= Y) continue;
      if (map[nextX][nextY]) continue;

      // 현재 칸에 올 수 있는 케이스 중에서 + 1 된 값
      for (let p = 0; p <= currentUsed; p++) {
        if (visit[nextX][nextY][p] || !visit[currentX][currentY][p]) continue;

        visit[nextX][nextY][p] = visit[currentX][currentY][p] + 1;
        queue.push([nextX, nextY, p]);
      }
    }

    if (currentUsed >= K) continue;

    for (let t = 0; t < 8; t++) {
      const nextX = currentX + horseDX[t];
      const nextY = currentY + horseDY[t];

      if (nextX < 0 || nextX >= X || nextY < 0 || nextY >= Y) continue;
      if (map[nextX][nextY]) continue;

      // 이제 뛰어서 넘어갈 케이스, 점프해서 넘어올 수 있는 케이스 중 하나 작은 점프 사용 횟수를 가진 곳 + 1
      for (let p = 0; p < K; p++) {
        if (visit[nextX][nextY][p + 1] || !visit[currentX][currentY][p]) continue;

        visit[nextX][nextY][p + 1] = visit[currentX][currentY][p] + 1;
        queue.push([nextX, nextY, p + 1]);
      }
    }
  }

  const result = Math.min(...visit[X - 1][Y - 1].filter(v => !!v)) - 1;

  return result === Infinity ? -1 : result;
}

console.log(solution(inputs));
