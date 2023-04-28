const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');



function solution(inputs) {
  let [N, M] = inputs.shift().split(' ').map(Number);
  let bigIntM = BigInt(M);

  const minHeap = new MinHeap();

  inputs
    .shift()
    .split(' ')
    .map(BigInt)
    .forEach((input) => minHeap.push(input));

  while (bigIntM) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    minHeap.push(first + second);
    minHeap.push(first + second);
    bigIntM -= 1n;
  }

  minHeap.heap.shift();

  return minHeap.heap.reduce((sum , curr) => sum + curr, 0n).toString();
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


console.log(solution(inputs));
