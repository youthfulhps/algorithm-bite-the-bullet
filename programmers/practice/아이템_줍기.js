const MAX = 103;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(rectangle, characterX, characterY, itemX, itemY) {
  rectangle = rectangle.map((rect) => rect.map(r => r * 2));
  [characterX, characterY, itemX, itemY] = [characterX, characterY, itemX, itemY].map(pos => pos * 2);

  const map = movablePositions(rectangle);
  const visit = Array.from({length: MAX}, () => Array(MAX).fill(0));
  visit[characterX][characterY] = 1;

  const queue = [[characterX, characterY]];

  while (queue.length) {
    const [currentX, currentY] = queue.shift();

    if (currentX === itemX && currentY === itemY) {
      return (visit[currentX][currentY] - 1) / 2;
    }

    for (let k = 0; k < 4; k++) {
      const nextX = currentX + dx[k];
      const nextY = currentY + dy[k];

      if (nextX < 0 || nextX >= MAX || nextY < 0 || nextY >= MAX) continue;
      if (visit[nextX][nextY] || map[nextX][nextY] !== 1) continue;

      queue.push([nextX, nextY]);
      visit[nextX][nextY] = visit[currentX][currentY] + 1;
    }
  }


}



function movablePositions(rectangle) {
  const map = Array.from({length: MAX}, () => Array(MAX).fill(0));

  rectangle.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (map[i][j] === 0) map[i][j] = 1;
        } else {
          map[i][j] = 2;
        }
      }
    }
  });

  return map;
}
