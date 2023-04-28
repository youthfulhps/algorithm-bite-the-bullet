const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  const S = inputs.shift();
  let T = inputs.shift();

  while (S.length !== T.length) {
    if (T[T.length -1] === 'A') {
      T = T.slice(0, -1);
    } else {
      T = T.slice(0, -1).split('').reverse().join('');
    }
  }

  return S === T ? 1 : 0;
}

console.log(solution(inputs));
