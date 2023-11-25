function solution(n, words) {
  // 조건이 참이 되는 index % n;
  // 조건이 참이 되는 index / n;
  const answer = [];

  for (let i = 1; i < words.length; i++) {
    const isDiff = words[i - 1][words[i - 1].length - 1] !== words[i][0];
    const isUsed = words.slice(0, i).findIndex(word => word === words[i]) !== -1;

    if (isDiff || isUsed) {
      return [(i + 1) % n || n, Math.floor(i / n) + 1];
    }
  }

  return [0, 0];
}
