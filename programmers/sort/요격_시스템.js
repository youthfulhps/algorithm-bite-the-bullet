function solution(targets) {
  var answer = 1;

  targets.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })

  let currentEnd = targets[0][1];
  for (let i = 1; i < targets.length; i++) {
    const [nextStart, nextEnd] = targets[i];

    if (nextStart < currentEnd) {
      currentEnd = Math.min(currentEnd, nextEnd);
      continue;
    }

    answer++;
    currentEnd = nextEnd;
  }

  return answer;
}
