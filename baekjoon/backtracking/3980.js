const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const playerCount = 11;

function solution(inputs) {
  const C = inputs.shift()[0];
  const globalAnswer = [];

  for (let c = 0; c < C; c++) {
    let answer = 0;
    let stats = [];

    for (let i = 0; i < playerCount; i++) {
      stats.push(inputs.shift());
    }

    const used = Array(playerCount).fill(0);

    back(0, 0);

    function back(currentSum, currentPlayer) {
      if (currentPlayer === playerCount) {
        answer = Math.max(answer, currentSum);
        return;
      }

      for (let i = 0; i < playerCount; i++) {
        if (!used[i] && stats[currentPlayer][i]) {
          // 만약 i번째 포지션이 비어있다면, i 포지션을 점유하고 다음 선수로 넘어감.
          currentSum += stats[currentPlayer][i];
          used[i] = 1;
          back(currentSum, currentPlayer + 1);
          currentSum -= stats[currentPlayer][i];
          used[i] = 0;
        }
      }
    }

    globalAnswer.push(answer);
  }

  return globalAnswer.join('\n');
}

console.log(solution(inputs));
