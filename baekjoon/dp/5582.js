const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const [stringA, stringB] = inputs;
  let maxValue = 0;

  const memo = Array.from({length: stringA.length + 1}, () => Array(stringB.length + 1).fill(0));

  for (let i = 1; i<= stringA.length; i++) {
    for (let j = 1; j<= stringB.length; j++) {
      if (stringA[i - 1] === stringB[j - 1]) {
        memo[i][j] = memo[i-1][j -1] + 1;
      }
    }

    maxValue = Math.max(maxValue, ...memo[i]);
  }

  return maxValue;
}

console.log(solution(inputs));
