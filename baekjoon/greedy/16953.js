


const inputs = require("fs").readFileSync("./input.txt").toString().trim();

function solution(inputs) {
  let result = 0;
  let [A, B] = inputs.split(' ').map(Number);

  while (A < B) {
    const stringB = B.toString();
    if (stringB[stringB.length -1] === '1') {
      B = Number(stringB.slice(0, stringB.length -1));
    } else {
      B /= 2;
    }

    result +=1;
  }

  return A === B ? result + 1 : -1;
}

console.log(solution(inputs));
