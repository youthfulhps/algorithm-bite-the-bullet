function solution(prices) {
  const len = prices.length;
  const answer = [];

  for (let i = 0; i < len; i++) {
    let stack = 0;

    for (let j = i + 1; j < len; j++) {
      stack++;

      if (prices[i] > prices[j]) {
        break;
      }
    }

    answer.push(stack);
  }

  return answer;
}







