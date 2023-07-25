function solution(k, tangerine) {
  var answer = 0;
  const map = new Map();

  for (let i = 0; i< tangerine.length; i++) {
    map.set(tangerine[i], (map.get(tangerine[i]) ?? 0) + 1);
  }

  const sizeCount = Array.from(map.values())
    .sort((a, b) => b - a);

  for (let count of sizeCount) {
    k -= count;
    answer++;

    if (k <= 0) {
      break;
    }
  }

  return answer;
}
