const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const T = inputs.shift()[0];
  const result = [];

  // 다음날 오르거나 같은 금액이면 산다.
  // 만약 가지고 있는데 다음날 떨어지면,
  // 판다.
  // 만약 가지고 있지 않은데 다음날 떨어지면,
  // 아무것도 안한다.

  for (let t = 0; t<T;t++) {
    const N = inputs.shift()[0];
    const prices = inputs.shift().reverse();
    let benefit = 0;
    let maxValue = prices[0];

    for (let i = 1; i<N;i++) {
      // 다음 금액이 낮으면 즉 오르면, 판다.
      // 2 1 3 1 1

      if (prices[i] <= maxValue) {
        benefit += maxValue - prices[i];
      } else {
        maxValue = prices[i];
      }
    }

    result.push(benefit);
  }

  return result;
}

solution(inputs).forEach(result => console.log(result));
