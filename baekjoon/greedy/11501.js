const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

// 나열된 숫자를 보면, 뒤에서부터 풀이를 시작하는 것도 여지를 두는 것이 중요할 것 같다.

function solution(inputs) {
  const result = [];
  const T = Number(inputs.shift());

  for (let i =0; i< T; i++) {
    const N = Number(inputs.shift());
    const prices = inputs.shift().split(' ').map(Number).reverse();
    let profit = 0;

    let maxValue = prices[0];

    for (let k =1; k<N; k++) {
      if (maxValue >= prices[k]) {
        profit += maxValue - prices[k];
      } else {
        maxValue = prices[k];
      }
    }

    result.push(profit);



    // 오늘 가격보다 이후에 높은 가격이 있으면 산다.
    // 주식을 가지고 있고, 오늘 가격보다 이후에 높은 가격이 없으면 판다.
    // 주식을 가지고 있지 않고, 오늘 가격보다 이후에 높은 가격이 없으면 아무것도 하지 않는다.
    // 시간 초과
    // for (let k =0; k<N; k++) {
    //   const maxValue = Math.max(...prices.slice(k));
    //
    //   if (prices[k] < maxValue) {
    //     investment += prices[k];
    //     count++;
    //   }
    //
    //   if (prices[k] === maxValue) {
    //     if (count) {
    //       profit+= (prices[k] * count) - investment;
    //       count = 0;
    //       investment = 0;
    //     }
    //   }
    // }
    // result.push(profit);
  }

  return result;
}


solution(inputs).forEach((result) => console.log(result));
