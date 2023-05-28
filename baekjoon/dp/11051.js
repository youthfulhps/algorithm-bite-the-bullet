const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(inputs) {
  const [N, K] = inputs;

  const memo = [[1, 1]];

  // n+1Ck+1 = nCk + nCk+1

  for (let n =0; n< N; n++) {
    const currentLevel = [];

    for (let k =0; k< n + 3; k++) {
      if (k === 0 || k === n+2) {
        currentLevel.push(1);
      } else {
        currentLevel.push((memo[n][k -1] + memo[n][k]) % 10007);
      }
    }

    memo.push(currentLevel);
  }

  return memo[N - 1][K];
}

console.log(solution(inputs));
