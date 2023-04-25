// 현재 올린 무게의 총합보다 이제 올리려는 무게가 크면 만들 수 있는 연속된 무게들 사이에 만들 수 없는 무게가 생긴다.
// 1 1 1 3 9 이면,
// 1 -> 1
// 1, 1 -> 1, 2
// 1, 1, 1 -> 1, 2, 3
// 1, 1, 1, 3 -> 1, 2, 3, 4, 5, 6
// 1, 1, 1, 3, 9 -> 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15
// 1, 1, 1, 3이 올라간 총합보다 큰 9의 무게의 추를 추가하면 연속된 수가 깨진다.

const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = 1;
  const N = Number(inputs.shift());

  const weight = inputs.shift().split(' ').map(Number).sort((a, b) => a - b);

  for (let i =0; i<Number(N); i++) {
    if (result < weight[i]) {
      break;
    }

    result += weight[i];
  }

  return result;
}

console.log(solution(inputs));
