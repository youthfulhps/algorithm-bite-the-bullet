function solution(board) {
  // BFS 인접 행렬 O(n^2);

  const START = 'R';
  const WALL = 'D';
  const FINISH = 'G';

  let finishPoint = null;

  const Y = board.length;
  const X = board[0].length;

  const visit = Array.from({length: Y}, () => Array(X).fill(0));

  const stack = [];

  for (let y = 0; y< Y; y++) {
    for (let x = 0; x < X; x++) {
      if (board[y][x] === START) {
        stack.push([y, x]);
        visit[y][x] = 1;
      } else if (board[y][x] === FINISH) {
        finishPoint = [y, x];
      }
    }
  }


  while (stack.length) {
    const [currentY, currentX] = stack.shift();

    if (board[currentY][currentX] === FINISH) {
      break;
    }

    for (let direction of ['UP', 'DOWN', 'LEFT', 'RIGHT']) {
      const [nextY, nextX] = move(currentY, currentX, direction);

      if (visit[nextY][nextX] === 0) {
        stack.push([nextY, nextX]);
        visit[nextY][nextX] = visit[currentY][currentX] + 1;
      }
    }
  }


  // direction [up, down, left, right];
  function move(currentY, currentX, direction) {
    switch (direction) {
      case 'UP':
        while (currentY > 0) {
          currentY--;
          if (board[currentY][currentX] === WALL) {
            currentY++;
            break;
          }
        }
        return [currentY, currentX];
      case 'DOWN':
        while (currentY < Y - 1) {
          currentY++;
          if (board[currentY][currentX] === WALL) {
            currentY--;
            break;
          }
        }
        return [currentY, currentX];
      case 'LEFT':
        while (currentX > 0) {
          currentX--;
          if (board[currentY][currentX] === WALL) {
            currentX++;
            break;
          }
        }
        return [currentY, currentX];
      case 'RIGHT':
        while (currentX < X - 1) {
          currentX++;
          if (board[currentY][currentX] === WALL) {
            currentX--;
            break;
          }
        }
        return [currentY, currentX];
      default:
        return [currentY, currentX];
    }
  }

  const answer = visit[finishPoint[0]][finishPoint[1]];

  return answer ? answer - 1 : -1;
}
