// 1초
// 256mb

const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0]
  // [시작, 끝]
  const schedules = inputs.sort((a, b) => a[0] - b[0]);
  let result = 0;

  const minHeap = new MinHeap();

  for (let i = 0; i<N; i++) {
    const [start, end] = schedules[i];
    if (minHeap.heap.length === 1) {
      minHeap.push(end);
    } else {
      if (minHeap.heap[1] > start) {
        // 아직 수업 중이면 다른 강의실을 사용한다.
        minHeap.push(end);
      } else {
        // 수업이 끝났으면 빼내고, 다음 수업 추가
        minHeap.pop();
        minHeap.push(end);
      }
    }

    result = Math.max(result, minHeap.heap.length - 1);
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

// const start = new Date();

console.log(solution(inputs));

// const end = new Date();
//
// console.log(end - start);
