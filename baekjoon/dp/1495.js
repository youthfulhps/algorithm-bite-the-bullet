const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

// 메모리 최대 51 * 1001
function solution(inputs) {
  const [N, START, MAX] = inputs.shift();
  const volumesDiffs = [0, ...inputs.shift()];

  const memo = Array.from({length: N + 1}, () => Array(MAX + 1).fill(0));

  memo[0][START] = 1;

  for (let i = 1; i<=N; i++) {
    for (let j = 0; j<=MAX; j++) {
      if (memo[i - 1][j] === 1) {
        const up = j + volumesDiffs[i];
        const down = j - volumesDiffs[i];
        if (up >= 0 && up <= MAX) {
          memo[i][up] = 1;
        }

        if (down >= 0 && down <= MAX) {
          memo[i][down] = 1;
        }
      }
    }

    if (memo[i].every(value => !value)) {
      return -1;
    }
  }

  let result = 0;

  memo[N].forEach((value, index) => {
    if (value === 1) {
      result = Math.max(result, index);
    }
  })

  return result;
}


// 메모리 초과, 2의 50승이여....
// function solution(inputs) {
//   const [N, START, MAX] = inputs.shift();
//   const volumesDiffs = [0, ...inputs.shift()];
//
//   // 볼륨 차이값을 빼거나 더할 수 있으며, 최대, 최소값을 넘어가면 안된다.
//   // 중간에 볼륨조절을 할 수 없다면, -1
//
//   const memo = [START];
//
//   for (let i = 1; i<=N; i++) {
//     const ableVolumes = [];
//
//     const volume = memo[i - 1];
//
//     // memo[i - 1].forEach((volume) => {
//       const plus = volume + volumesDiffs[i];
//       const minus = volume - volumesDiffs[i];
//       if (plus >= 0 && plus <= MAX) {
//         ableVolumes.push(plus);
//       }
//
//       if (minus >= 0 && minus <= MAX) {
//         ableVolumes.push(minus);
//       }
//     // })
//
//     if (ableVolumes.length) {
//       memo.push(Math.max(...ableVolumes));
//     } else {
//       return -1;
//     }
//   }
//
//   // return Math.max(...memo[N]);
//   return memo[N];
// }

console.log(solution(inputs));
