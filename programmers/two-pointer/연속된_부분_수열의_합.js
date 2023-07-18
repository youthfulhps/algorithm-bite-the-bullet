function solution(sequence, k) {
  let [start, end] = [0, 0];

  const answer = [0, 1000000];

  const N = sequence.length;

  let sum = sequence[0];

  while (end < N) {
    if (sum === k) {
      if (answer[1] - answer[0] > end - start) {
        answer[0] = start;
        answer[1] = end;
      }

      sum -= sequence[start++];
      sum += sequence[++end];
    }

    if (sum > k) {
      sum -= sequence[start++];
    } else if (sum < k) {
      sum += sequence[++end];
    }
  }

  return answer;
}

console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));

// 1 1 1 2 [0, 3]
// 2 3     [3, 4]
// 5       [6, 6]



