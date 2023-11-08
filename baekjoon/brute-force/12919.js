const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const [S, T] = inputs;
  let answer = 0;

  function convert(current) {
    if (current.length === S.length) {
      if (current === S) {
        answer = 1;
      }
      return;
    }

    if (current[current.length - 1] === 'A') {
      convert(current.slice(0, -1));
    }

    if (current[0] === 'B') {
      convert(current.slice(1).split('').reverse().join(''));
    }
  }

  convert(T);

  return answer;
}

console.log(solution(inputs));
