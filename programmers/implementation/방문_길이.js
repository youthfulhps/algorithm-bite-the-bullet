const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(dirs) {
  let answer = 0;
  const visit = Array.from(
    {length: 11}, () => Array.from(
      {length: 11}, () => Array.from({length: 4}, () => 0))
  );

  let current = [5, 5];

  Array.from(dirs).forEach(dir => {
    const [currentX, currentY] = current;

    const dirIndex = dirToIndex(dir);
    const nextDirIndex = dirToIndex(oppositeDir(dir));

    const nextX = currentX + dx[dirIndex];
    const nextY = currentY + dy[dirIndex];

    if (nextX >= 0 && nextX < 11 && nextY >= 0 && nextY < 11) {
      if (!visit[nextX][nextY][nextDirIndex] && !visit[currentX][currentY][dirIndex]) {
        visit[currentX][currentY][dirIndex] = 1;
        visit[nextX][nextY][nextDirIndex] = 1;
        answer += 1;
      }

      current = [nextX, nextY];
    }
  })

  return answer;
}

function dirToIndex(dir) {
  switch(dir) {
    case 'U':
      return 0;
    case 'D':
      return 1;
    case 'R':
      return 2;
    case 'L':
      return 3;
    default:
      return 0;
  }
}

function oppositeDir(dir) {
  switch(dir) {
    case 'U':
      return 'D';
    case 'D':
      return 'U';
    case 'R':
      return 'L';
    case 'L':
      return 'R';
    default:
      return 'D';
  }
}
