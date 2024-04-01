const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

// * N, M의 수가 너무 커서 3중 for문을 사용하는 플로이드-와샬 알고리즘을 사용할 수 없음.
function solution(inputs) {
  const [N, M] = inputs.shift();

  // * 선행 과목이 없다는 가정하에 모두 1학기에 들을 수 있으니, 초기값을 1로 설정.
  const memo = Array.from({length: N + 1}, () => 1);

  inputs.sort((a, b) => a[0] - b[0]);

  for (const [prev, next] of inputs) {
    memo[next] = Math.max(memo[next], memo[prev] + 1);
  }

  return memo.slice(1).join(' ');
}

console.log(solution(inputs));
