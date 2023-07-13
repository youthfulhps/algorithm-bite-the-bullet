const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(maps) {
  const X = maps.length;
  const Y = maps[0].length;
  const visit = Array.from({length: X}, () => Array(Y).fill(0));

  // 최단거리를 구하는 것 -> BFS
  const stack = [[0, 0]];
  visit[0][0] = 1;

  while (stack.length) {
    const [currentX, currentY] = stack.shift();

    for (let k = 0; k<4;k++) {
      const nextX = currentX + dx[k];
      const nextY = currentY + dy[k];

      if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
        if (maps[nextX][nextY] && !visit[nextX][nextY]) {
          visit[nextX][nextY] = visit[currentX][currentY] + 1;
          stack.push([nextX, nextY]);
        }
      }
    }
  }

  const result = visit[X - 1][Y - 1];

  return result ? result : -1;
}
