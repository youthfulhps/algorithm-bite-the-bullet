const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  let result = '';
  let N = inputs.shift();
  const stack = [];

  for (let i=1; i<=N;i++) {
    if (inputs[0] === stack[stack.length -1]) {
      stack.pop();
      result += '-\n';
      inputs.shift();
      i--;
    } else {
      stack.push(i);
      result += '+\n';
    }
  }

  while (stack.length) {
    if (inputs.shift() === stack.pop()) {
      result += '-\n';
    } else {
      result = 'NO';
      break;
    }
  }

  return result;
}

console.log(solution(inputs));
