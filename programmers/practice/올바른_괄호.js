function solution(s){
  let answer = true;

  const stack = [];

  for (let bracket of s) {
    if (bracket === '(') {
      stack.push(bracket);
      continue;
    }

    if (!stack.length) {
      answer = false;
      break;
    }

    stack.pop();
  }

  return answer && !stack.length;
}
