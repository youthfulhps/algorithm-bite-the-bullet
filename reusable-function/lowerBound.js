function lowerBound(numbers, targetValue) {
  let start = 0;
  let end = numbers.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (numbers[mid] >= targetValue) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}
