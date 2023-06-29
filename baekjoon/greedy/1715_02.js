const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const N = inputs.shift();
  const minHeap = new MinHeap();

  inputs.forEach(input => minHeap.push(input));

  let result = 0;

  while (minHeap.heap.length > 2) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const sum = first + second;
    minHeap.push(sum);
    result += sum;
  }


  return result;
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    // null이 포함되어 있어서 -1
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap.length[1] ?? null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (this.heap[parentIndex] > this.heap[currentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const minValue = this.heap[1];

    if (this.heap.length <= 2) {
      // 길이가 2 이하면, 한놈 반환할거니까 초기화
      this.heap = [null];
    } else {
      // 맨 마지막 값을 맨 노드로 옮김
      this.heap[1] = this.heap.pop();
    }

    let currentIndex = 1;
    let leftChildIndex = currentIndex * 2;
    let rightChildIndex = currentIndex * 2 + 1;

    // 왼쪽 노드가 없으면, 오른쪽 노드도 없음
    if (!this.heap[leftChildIndex]) {
      return minValue;
    }

    // 왼쪽이 있고, 오른쪽이 없으면 왼쪽이랑 부모랑만 비교
    if (!this.heap[rightChildIndex]) {
      if (this.heap[currentIndex] > this.heap[leftChildIndex]) {
        this.swap(currentIndex, leftChildIndex);
      }
      return minValue;
    }

    // 둘다 있으면, 부모가 자식들보다 작을때까지 바꿔줌
    while (this.heap[currentIndex] > this.heap[leftChildIndex] ||
      this.heap[currentIndex] > this.heap[rightChildIndex]
      ) {
      const minIndex = this.heap[leftChildIndex] > this.heap[rightChildIndex] ? rightChildIndex : leftChildIndex;

      this.swap(currentIndex, minIndex);
      currentIndex = minIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return minValue;
  }

  display() {
    return this.heap.join(' ')
  }
}

console.log(solution(inputs));
