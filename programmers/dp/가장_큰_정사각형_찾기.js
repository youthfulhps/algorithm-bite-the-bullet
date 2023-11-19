function solution(board) {
  const X = board.length;
  const Y = board[0].length;
  const memo = Array.from({length: X + 1}, () => Array(Y + 1).fill(0));
  const map = [Array(Y + 1).fill(0), ...board.map(b => [0, ...b])];

  let answer = 0;

  for (let x = 1; x <= X; x++) {
    for (let y = 1; y <= Y; y++) {
      if (map[x][y]) {
        const min = Math.min(memo[x][y - 1], memo[x - 1][y], memo[x - 1][y - 1]);
        memo[x][y] = min + 1;
      }

      answer = Math.max(answer, memo[x][y]);
    }
  }

  return answer ** 2;
}
