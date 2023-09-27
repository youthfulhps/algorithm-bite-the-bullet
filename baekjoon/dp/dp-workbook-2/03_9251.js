const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const [A, B] = inputs;
  const lenA = A.length;
  const lenB = B.length;
  const memo = Array.from({length: lenA + 1}, () => Array(lenB + 1).fill(0));

  for (let i = 0; i <= lenA; i++) {
    for (let j = 0; j <= lenB; j++) {
      if (i === 0 || j === 0) {
        memo[i][j] = 0;
        continue;
      }

      if (A[i - 1] === B[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1] + 1;
      } else {
        memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
      }
    }
  }

  return memo[lenA][lenB];
}

console.log(solution(inputs));
