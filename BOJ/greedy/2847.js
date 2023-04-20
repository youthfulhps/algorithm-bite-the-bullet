const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n').map(Number);

function solution(inputs) {
  const N = inputs.shift();
  inputs.reverse();

  let result =  0;
  let currentScore = inputs[0];

  for (let i=1; i<inputs.length;i++) {
    if (currentScore <= inputs[i]) {
      const diff = inputs[i] - currentScore + 1;
      result += diff;
      currentScore = inputs[i] - diff;
    } else {
      currentScore = inputs[i];
    }
  }

  return result;
}

console.log(solution(inputs));
