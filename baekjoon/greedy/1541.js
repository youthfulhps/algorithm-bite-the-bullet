// -로 시작해서 -가 나올때까지 묶어서 모든 연산은 + 처리
// - 로 시작해서 다음 - 가 등장할때까지 묶어 합산
// 첫 수에서 묶어 합산된 값들을 모두 빼주면 된다.

// eval은 백준 런타임에서 약간 문제가 있음

const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('-');

// w/ eval
// function solution(inputs) {
//   let result = '';
//
//   for (let i =0; i<inputs.length; i++) {
//     if (inputs[i] === '-') {
//       result += '-(';
//
//       let currentIndex = i + 1;
//
//       while (currentIndex < inputs.length || inputs[currentIndex] === "+") {
//         if (inputs[currentIndex] === '-') {
//           result += '+';
//         } else {
//           result += inputs[currentIndex];
//         }
//
//         currentIndex++;
//       }
//
//       i = currentIndex;
//       result += ')';
//     } else {
//       result +=inputs[i];
//     }
//   }
//
//   return result;
// }

function solution(inputs) {
  let result = 0;
  let parts = [];

  for (let input of inputs) {
    let partsSum = input.split('+').map(Number).reduce((sum, current) => sum + current, 0);

    parts.push(partsSum);
  }

  result = parts.shift();

  const totalPartsSum = parts.reduce((sum, current) => sum + current, 0);

  return result - totalPartsSum;
}

console.log(solution(inputs));
