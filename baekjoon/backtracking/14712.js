const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ').map(Number);

const dx = [-1, -1, 0];
const dy = [0, -1, -1];

function solution(inputs) {
  let answer = 0;
  const [Y, X] = inputs;

  const map = Array.from({length: X}, () => Array(Y).fill(0));

  function back(currentX, currentY) {
    if (currentX === X - 1 && currentY === Y) {
      answer++;
      return;
    }

    if (currentY === Y) {
      currentX++;
      currentY = 0;
    }

    if (!isRemovable(currentX, currentY)) {
      map[currentX][currentY] = 1;
      back(currentX, currentY + 1);
      map[currentX][currentY] = 0;
    }

    back(currentX, currentY + 1);
  }

  function isRemovable(currentX, currentY) {
    for (let i = 0; i < 3; i++) {
      const checkX = currentX + dx[i];
      const checkY = currentY + dy[i];

      if (checkX < 0 || checkX >= X || checkY < 0 || checkY >= Y) return false;
      if (!map[checkX][checkY]) return false;
    }

    return true;
  }

  back(0, 0)

  return answer;
}


console.log(solution(inputs));
