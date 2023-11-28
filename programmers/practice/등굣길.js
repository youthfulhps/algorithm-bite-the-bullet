const PUDDLE = 'X';
const DIVIDER = 1000000007

function solution(m, n, puddles) {
  const map = Array.from({length: n + 1}, () => Array(m + 1).fill(0));
  map[1][1] = 1;

  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= m; y++) {
      if (x === 1 && y === 1) continue;
      if (isPuddle(x, y, puddles)) continue;

      map[x][y] = (map[x - 1][y] + map[x][y - 1]) % DIVIDER;
    }
  }

  return map[n][m]
}

function isPuddle(x, y, puddles) {
  return puddles.some(([puddleY, puddleX]) => puddleX === x && puddleY === y);
}


