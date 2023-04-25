// 0으로 이루어진 연속된 문자열, 1로 이루어진 연속된 문자열 갯수를 파악해서 적은 쪽을 뒤집자.

const inputs = require("fs").readFileSync("./input.txt").toString().trim();

function solution(inputs) {
  let result = 0;
  let zeroCount = 0;
  let oneCount = 0;

  for (let i =0; i<inputs.length; i++) {
    let currentIndex = i;
    const target = inputs[i];

    while (inputs[currentIndex] === target) {
      currentIndex++;
    }

    if (target === '0') {
      zeroCount+=1;
    } else {
      oneCount+=1;
    }

    i = currentIndex -1;
  }

  result = Math.min(zeroCount, oneCount);

  return result;
}

console.log(solution(inputs));
