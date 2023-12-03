function solution(Y, X, board) {
  board = transpose(board);

  let removable = removableBlockIndexes(X, Y, board);

  while (removable.length) {
    board = removeBlock(X, Y, removable, board);
    removable = removableBlockIndexes(X, Y, board);
  }

  return countZero(X, Y, board);
}

function removableBlockIndexes(X, Y, board) {
  const indexes = [];
  for (let x = 0; x < X - 1; x++) {
    for (let y = 0; y < Y - 1; y++) {
      if (board[x][y] === '0') continue;

      const block = [[x, y], [x, y + 1], [x + 1, y], [x + 1, y + 1]];

      const removable = block
        .every(([currentX, currentY]) => board[currentX][currentY] === board[x][y]);

      if (removable) {
        indexes.push(...block);
      }
    }
  }

  return indexes;
}

function removeBlock(X, Y, indexes, board) {
  indexes.forEach(([x, y]) => {
    let row = board[x].split('');
    row[y] = 0;
    board[x] = row.join('');
  });

  return board.map((row) => row.split('').filter(r => r !== '0').join('').padStart(Y, '0'))
}

function transpose(board) {
  board = board.map(row => row.split(''));
  return board[0]
    .map((_, colIndex) => board.map(row => row[colIndex]))
    .map(row => row.join(''));
}

function countZero(X, Y, board) {
  let count = 0;
  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (board[x][y] === '0') {
        count++;
      }
    }
  }

  return count;
}
