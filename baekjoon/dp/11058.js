const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = Number(inputs);

  // A가 증가할 수 있는 케이스
  // A를 하나 친다 -> memo[i - 1] + 1
  // 3번째 전 값 시점에 복사된 값을 다시 붙여넣는다.

  const memo = [0, 1, 2, 3];

  if (N < 4) {
    return memo[N];
  }

  for (let i =4; i<=N;i++) {
    let maxLength = memo[i - 1] + 1;
    for (let j = 1; j <i - 2;j++) {
      maxLength = Math.max(maxLength, memo[j] * (i - j - 1))
    }
    memo.push(maxLength);
  }

  return memo[N];
}

console.log(solution(inputs));
