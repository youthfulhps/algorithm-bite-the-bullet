const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const totalResult = [];
  let result = 0;
  const T = inputs.shift()[0];

  for (let i =0; i< T; i++) {
    result = 0;
    const K = inputs.shift()[0];
    const minHeap = new MinHeap();

    inputs.shift().forEach((input) => minHeap.push(input));

    while (minHeap.size() > 1) {
      const first = minHeap.pop();
      const second = minHeap.pop();

      const sum = first + second;

      minHeap.push(sum);
      result+=sum;
    }

    totalResult.push(result);
  }

  return totalResult;
}

class MinHeap {
  constructor() {
    this.heap = [ null ];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx)
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const min = this.heap[1];
    if(this.heap.length <= 2) this.heap = [ null ];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if(!this.heap[leftIdx]) return min;
    if(!this.heap[rightIdx]) {
      if(this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
      const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}

solution(inputs).forEach(result => console.log(result));
