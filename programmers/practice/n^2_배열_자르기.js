function solution(n, left, right) {
  let answer = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const column = i % n;
    if (row > column) {
      answer.push(row + 1);
    } else {
      answer.push(column + 1);
    }
  }

  return answer;
}
