// https://www.acmicpc.net/problem/13164
// 나열된 수를 나누어 갭이 가장 적도록 하는 것, 풀이가 떠오르지 않지만 많이 출제되는 유형
// 예를 들어, 정렬된 수열을 세 그룹으로 구성한다면, 두번 나눌 수 있다.
// 여기서 차이가 가장 적어야 하니, 각각의 수들 사이의 차이값이 큰 부분부터 나누어버리면 차이값을 최소로 만들 수 있다.


const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

function solution(inputs) {
  const [N, K] = inputs.shift();
  const students = inputs.shift();
  const gaps = [];

  for (let i =0; i<N - 1;i++) {
    gaps.push(students[i+1] - students[i]);
  }

  return gaps
    .sort((a, b) => b -a)
    .slice(K - 1)
    .reduce((sum, curr) => sum + curr, 0);
}

console.log(solution(inputs));
