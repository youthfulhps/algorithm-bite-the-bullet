function solution(A,B){
  // 남은 값 중 가장 작은 값 * 남은 값 중 가장 큰 값 -> 최소값
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((sum, curr, index) => sum + curr * B[index], 0);
}
