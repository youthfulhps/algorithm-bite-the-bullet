// 작은 뭉치를 여러번 합쳐지는 대상으로 삼는다.
// 오름차순으로 정렬한다.
// 가장 적은 두 뭉치를 합친다.
// 합산 결과에 더한다.
// 다시 오름차순으로 정렬한다. 반복!
// 합산 후 다시 뽑을때도 가장 작은 두 뭉치를 뽑아야 한다. (최초 입력을 소팅한다고 해서 되지않음 e.g. 3 4 5 6)

// 첫 시도는 입력값을 오름차순으로 정렬하고 하나씩 뭉치를 합쳐가면 된다고 생각했는데 다음과 같은 반례가 있음
// 3 4 5 6
// 3 + 4 이후 7 5 6 이 되었다면, 5 + 6 을 다음으로 합치는 것이 횟수가 적음
// 합산 이후 그때 그때 적은 두 뭉치 찾아야 함

// Fail: 메모리 초과 -> 배열말고 minHeap?

const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n').map(Number);

function solution(inputs) {
  let result = 0;
  const N = inputs.shift();

  if (N === 1) {
    return inputs[0];
  }


  while(inputs.length > 1) {
    inputs.sort((a, b) => a - b);
    const partsSum = inputs.shift() + inputs.shift();

    result += partsSum;
    inputs.unshift(partsSum);
  }

  return result;
}

console.log(solution(inputs));
