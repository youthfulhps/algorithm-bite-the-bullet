function solution(arr) {
  var answer = [];
  arr.map((a, i) => {
    if (a !== arr[i + 1]) {
      answer.push(a);
    }
  });
  return answer;
}
