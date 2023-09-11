const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const N = inputs.shift();

  const score = [0, ...inputs];

  if (N <= 1) {
    return score[N];
  }

  const memo = Array.from({length: N + 1}, () => Array(2).fill(0));

  // 시작점이 연속 세칸에서 제외됨에 따라 예외적으로 처리해주어야 한다.
  memo[1][0] = score[1];
  memo[2][0] = score[1] + score[2];
  memo[2][1] = score[2];

  // memo -> 현재 계단에 도착하기 위해 사용한 방법에 대한 점수 구분
  // [한칸 이동한 점수, 두칸 이동한 점수]
  for (let i = 3; i <= N; i++) {
    // memo[i][0] -> i - 1 번째에 도착한 방법이 한 칸 이동이라면 i 까지 한칸 이동 할 수 없음
    // 즉, 두칸 이동한 방법으로 i - 1로 이동해온 점수에서 한 칸 이동만 가능
    memo[i][0] = memo[i - 1][1] + score[i];

    // memo[i][1] -> 두 칸 이동은 제약이 없음.
    // 즉, i - 2 번째에 도착한 방법이 한칸 이동이든, 두칸 이동이든 상관없이 두 칸 이동으로 i칸 도착 가능
    memo[i][1] = Math.max(...memo[i - 2]) + score[i];
  }

  return Math.max(...memo[N]);
}

console.log(solution(inputs));
