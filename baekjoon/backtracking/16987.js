const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  let answer = 0;
  const eggs = inputs;

  back(0);

  function back(currentIndex) {
    if (currentIndex === N) {
      const brokenCount = eggs.filter(([durability, _]) => durability <= 0).length;
      answer = Math.max(answer, brokenCount);
      return;
    }

    let hasBreakable = false;

    for (let next = 0; next < N; next++) {
      if (next == currentIndex) continue;
      if (eggs[currentIndex][0] <= 0 || eggs[next][0] <= 0) continue;
      hasBreakable = true;
      eggs[currentIndex][0] = eggs[currentIndex][0] - eggs[next][1];
      eggs[next][0] = eggs[next][0] - eggs[currentIndex][1];
      back(currentIndex + 1);
      eggs[currentIndex][0] = eggs[currentIndex][0] + eggs[next][1];
      eggs[next][0] = eggs[next][0] + eggs[currentIndex][1];
    }


    if (!hasBreakable) {
      back(currentIndex + 1);
    }
  }

  return answer;
}

console.log(solution(inputs));
