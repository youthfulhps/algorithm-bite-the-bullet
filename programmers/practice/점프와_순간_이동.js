function solution(n) {
  // K칸 점프 -> K만큼 베터리 소모
  // 현재 온 거리 * 2 순간이동 베터리 소모X

  let answer = 0;

  while (n) {
    if (n % 2 === 0) {
      n /= 2;
      continue;
    }

    n -= 1;
    answer++;
  }

  return answer;
}
