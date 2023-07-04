const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function solution(inputs) {
  const N = Number(inputs.shift());
  const map = inputs.map(input => input.split('').map(Number));
  let result = 0;
  let complexCount = [];
  const visit = Array.from({length: N}, () => Array(N).fill(0));

  // dfs
  // dfs에서 순회한 곳에 대해 visit의 같은 위치에 1을 표시
  // stack에서 하나씩 꺼내서 순회

  for (let x = 0; x<N; x++) {
    for (let y = 0; y<N; y++) {
      const stack = [];
      let houseCount = 0;
      if (map[x][y] && !visit[x][y]) {
        stack.push([x, y]);

        while (stack.length) {
          const [currentX, currentY] = stack.pop();

          if (visit[currentX][currentY]) {
            continue;
          }
          visit[currentX][currentY] = 1;
          houseCount++;

          for (let k = 0; k<4 ;k++) {
            const nextX = currentX + dx[k];
            const nextY = currentY + dy[k];

            if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N) {
              if (map[nextX][nextY] && !visit[nextX][nextY]) {
                stack.push([nextX, nextY]);
              }
            }
          }
        }
        complexCount.push(houseCount);
        result++;
      }
    }
  }

  return [result, complexCount.sort((a, b) => a - b)];
}

const [result, complexCount] = solution(inputs);

console.log(result);
complexCount.forEach(count => console.log(count));
