function solution(s) {
  const stack = [];

  for (let next of s) {
    if (!stack.length) {
      stack.push(next);
      continue;
    }

    if (stack[stack.length - 1] === next) {
      stack.pop();
    } else {
      stack.push(next);
    }
  }

  return Number(!stack.length);
}
