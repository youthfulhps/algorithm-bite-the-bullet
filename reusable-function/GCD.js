
// 유클리드 호제법을 통한 최대 공약수 구하기
// 2개의 자연수 A, B (A>B) 에 대해서 A를 B로 나눈 나머지를 r이라고 한다면,
// A와 B의 최대 공약수는 B와 r의 최대 공약수와 같다.

function GCD(a, b) {
  if (b === 0) {
    return a;
  }

  return GCD(b, a % b);
}
