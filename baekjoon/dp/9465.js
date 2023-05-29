const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const T = inputs.shift()[0];
  const result = [];

  for (let t =0; t<T; t++) {
    const N = inputs.shift()[0];
    const stickers = [inputs.shift(), inputs.shift()];

    // 예외 상황
    if (N === 1) {
      result.push(Math.max(stickers[0][0], stickers[1][0]));
      continue;
    }

    const memo = [
      [stickers[0][0], stickers[1][0] + stickers[0][1]],
      [stickers[1][0], stickers[0][0] + stickers[1][1]]
    ];

    for (let i = 2; i<N;i++) {
      memo[0][i] = Math.max(memo[1][i - 2], memo[1][i -1]) + stickers[0][i];
      memo[1][i] = Math.max(memo[0][i - 2], memo[0][i -1]) + stickers[1][i];
    }

    result.push(Math.max(...memo.flat()))
  }


  return result;
}

solution(inputs).forEach(result => console.log(result));

