function solution(s) {
  var answer = [];

  let cycleCount = 0;
  let removeCount = 0;

  while (s.length > 1) {
    cycleCount++;
    const currentCount = s.length;
    s = Array.from(s).filter(e => e !== '0').join('');
    const diff = currentCount - s.length;
    removeCount += diff;

    s = s.length.toString(2);
  }

  return [cycleCount, removeCount];
}
