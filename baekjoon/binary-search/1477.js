const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

// * 이분, 매개변수 탐색
// * 각각의 휴게소 사이에 적당한 간격(mid)을 두고 세울 수 있는 수를 구한다.
// * 간격에 따라 지은 휴게소의 총 갯수가 M보다 크면 간격을 조금 더 좁힌다. (start = mid + 1)
// * 간격에 따라 지은 휴게소의 총 갯수가 M보다 작으면 간격을 조금 더 넓힌다. (end = mid - 1)

function solution(inputs) {
  const [N, M, totalDistance] = inputs.shift();

  const positions = [...(N === 0 ? [] : inputs.shift()), 0, totalDistance]
    .sort((a, b) => a - b);

  let start = 1;
  let end = totalDistance - 1;
  let mid = Math.floor((start + end) / 2);

  while (end >= start) {
    let builtCount = 0;

    for (let i = 1; i < positions.length; i++) {
      const distance = positions[i] - positions[i - 1];
      let canBeBuiltCount = Math.floor((distance / mid));
      const isOverlapWithLast = distance % mid === 0;

      if (!canBeBuiltCount) continue;

      if (isOverlapWithLast) {
        canBeBuiltCount -= 1;
      }

      builtCount += canBeBuiltCount;
    }

    if (builtCount > M) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return start;
}

console.log(solution(inputs));
