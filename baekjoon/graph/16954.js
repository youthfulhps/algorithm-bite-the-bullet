const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(''));

// * BFS로 구현
// * 욱제가 움직이고, 그 다음 벽이 움직인다.
// * 처음 접근, 욱제를 움직일 수 있는 곳으로 이동시킨다.
// * 벽이 움직인 결과 위치가 욱제가 움직일 수 있는 곳 (queue에 들어있는 곳) 이라면 queue에서 제거한다.
// * visit는 벽이 움직였을 때 다시 초기화해주어야 지난 자리도 벽을 피해갈 수 있는 케이스를 포함시킬 수 있다.

const dx = [0, 1, 1, 0, -1, -1, -1, 0, 1]
const dy = [0, 0, 1, 1, 1, 0, -1, -1, -1]

const EMPTY = '.';
const WALL = '#';

function solution(map) {
  let queue = [[7, 0]];
  const [finishX, finishY] = [0, 7];

  while (queue.length) {
    const visit = Array.from({length: 8}, () => Array(8).fill(0));
    queue = filterNextWallPosition(map, queue);
    const batchSize = queue.length;

    for (let i = 0; i < batchSize; i++) {
      const [currentX, currentY] = queue.shift();

      if (currentX === finishX && currentY === finishY) {
        return 1;
      }

      for (let k = 0; k < 8; k++) {
        const nextX = currentX + dx[k];
        const nextY = currentY + dy[k];

        if (nextX < 0 || nextX >= 8 || nextY < 0 || nextY >= 8) continue;
        if (map[nextX][nextY] === WALL || visit[nextX][nextY]) continue;

        queue.push([nextX, nextY]);
        visit[nextX][nextY] = 1;
      }
    }
    map = moveWall(map);
  }

  return 0;
}

function moveWall(map) {
  map.pop();
  map.unshift([...Array(8).fill(EMPTY)])

  return map;
}

function filterNextWallPosition(map, queue) {
  return queue.filter(([x, y]) => map[x][y] !== WALL);
}

console.log(solution(inputs));
