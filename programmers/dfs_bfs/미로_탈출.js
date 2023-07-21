const START = 'S';
const END = 'E';
const LEVER = 'L';
const ROUTE = 'O';
const WALL = 'X';

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(maps) {
  // 레버를 먼저 당겨야 출구로 나갈 수 있다.
  // 레버를 열기 전에 출구를 만나는 건 문제가 없다.
  // 인접 행렬 -> 모든 노드를 순회할 가능성 -> O(n^2)
  const X = maps.length;
  const Y = maps[0].length;

  const answer = [];

  let startPoint;
  let endPoint;
  let leverPoint;

  for (let x = 0; x <X; x++) {
    for (let y = 0; y<Y; y++) {
      if (maps[x][y] === START) {
        startPoint = [x, y];
      }

      if (maps[x][y] === END) {
        endPoint = [x, y];
      }

      if (maps[x][y] === LEVER) {
        leverPoint = [x, y];
      }
    }
  }

  BFS(startPoint, leverPoint);
  BFS(leverPoint, endPoint);

  function BFS(from, to) {
    const stack = [from];
    const [endX, endY] = to;

    const visit = Array.from({length: X}, () => Array(Y).fill(0));

    visit[from[0]][from[1]] = 1;

    while (stack.length) {
      const [currentX, currentY] = stack.shift();

      if (currentX === endX && currentY === endY) {
        answer.push(visit[currentX][currentY]);
        break;
      }

      for (let k = 0; k <4; k++) {
        const nextX = currentX + dx[k];
        const nextY = currentY + dy[k];

        if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
          if (maps[nextX][nextY] !== WALL && !visit[nextX][nextY]) {
            visit[nextX][nextY] = visit[currentX][currentY] + 1;
            stack.push([nextX, nextY]);
          }
        }
      }
    }
  }

  return answer.length === 2 ? answer[0] + answer[1] - 2 : -1;
}
