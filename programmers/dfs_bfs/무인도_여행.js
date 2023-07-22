const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(maps) {
  // BFS
  var answer = [];

  const X = maps.length;
  const Y = maps[0].length;

  const visit = Array.from({length: X}, () => Array(Y).fill(0));

  for (let x = 0; x <X ;x++) {
    for (let y = 0; y < Y; y++) {
      let maxDays = 0;
      const stack = [];

      if (maps[x][y] !== 'X' && !visit[x][y]) {
        stack.push([x, y]);
        visit[x][y] = 1;

        while (stack.length) {
          const [currentX, currentY] = stack.shift();
          maxDays += Number(maps[currentX][currentY]);

          for (let k = 0; k < 4; k++) {
            const nextX = currentX + dx[k];
            const nextY = currentY + dy[k];

            if (nextX >= 0 && nextX < X && nextY >= 0 && nextY < Y) {
              if (maps[nextX][nextY] !== 'X' && !visit[nextX][nextY]) {
                stack.push([nextX, nextY]);
                visit[nextX][nextY] = 1;
              }
            }
          }
        }
        answer.push(maxDays);
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
