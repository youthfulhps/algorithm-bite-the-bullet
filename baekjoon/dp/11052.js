const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const prices = [0, ...inputs.shift()];

  const memo = [0, prices[1]];

  for (let i =2; i<=N;i++) {
    // 1. 구매해야 하는 카드 수와 딱 맞는 카드팩을 구매할 때의 비용
    let maxPrice = prices[i];

    // 2. 부분 카드를 구매하는 가장 비싼 비용 + 나머지 카드를 구매하는 비용
    // 1, 2. 들 중 가장 비싼 값을 메모
    for (let j=0; j<i;j++) {
      maxPrice = Math.max(maxPrice, memo[j] + prices[i - j]);
    }

    memo[i] = maxPrice;
  }

  return memo[N];
}

console.log(solution(inputs));
