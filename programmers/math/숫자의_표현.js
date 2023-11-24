// * 연속된 자연수들로 n을 표현하는 방법의 수는 n의 약수 중 홀수의 수와 같다.

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }
  return answer;
}
