function check(board, deck) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  return lines
    .map(line => line.every(position => board[position] === deck))
    .includes(true);
}

function solution(board) {
  board = board.join('').split('');

  let countO = board.filter(deck => deck === 'O').length;
  let countX = board.filter(deck => deck === 'X').length;


  const isOWin = check(board, 'O');
  const isXWin = check(board, 'X');

  if (!countO && countX) return 0;
  if (Math.abs(countO - countX) > 1) return 0;
  if (isOWin && countO <= countX) return 0;
  if (isXWin && countO !== countX) return 0;

  return 1;
}
