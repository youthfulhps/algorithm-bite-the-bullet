function solution(numbers, target) {
  let result = 0;

  function DFS(currentIndex, currentSum) {
    if (currentIndex === numbers.length - 1) {
      if (currentSum === target) {
        result++;
      }
      return;
    }

    const nextIndex = currentIndex + 1;

    DFS(nextIndex, currentSum + numbers[nextIndex]);
    DFS(nextIndex, currentSum - numbers[nextIndex]);
  }

  DFS(-1, 0);

  return result;
}
