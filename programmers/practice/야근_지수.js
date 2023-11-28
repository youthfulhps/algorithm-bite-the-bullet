class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(newValue) {
    this.heap.push(newValue);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];

    if (this.heap.length <= 2) {
      this.heap = [null];
    } else {
      this.heap[1] = this.heap.pop();
    }

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    if (!this.heap[leftIndex]) {
      return returnValue;
    }

    if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex] > this.heap[currentIndex]) {
        this.swap(currentIndex, leftIndex);
      }

      return returnValue;
    }

    while (
      this.heap[currentIndex] < this.heap[rightIndex] ||
      this.heap[currentIndex] < this.heap[leftIndex]
      ) {
      const maxIndex = this.heap[rightIndex] > this.heap[leftIndex] ? rightIndex : leftIndex;

      this.swap(currentIndex, maxIndex);
      currentIndex = maxIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function solution(n, works) {
  if (works.reduce((sum, curr) => sum + curr, 0) <= n) {
    return 0;
  }

  const maxHeap = new MaxHeap();

  works.forEach((work) => maxHeap.push(work));

  for (let i = 0; i < n; i++) {
    maxHeap.push(maxHeap.pop() - 1);
  }

  return maxHeap.heap.reduce((sum, curr) => sum + curr ** 2, 0);
}
