// 작은 뭉치를 여러번 합쳐지는 대상으로 삼는다.
// 오름차순으로 정렬한다.
// 가장 적은 두 뭉치를 합친다.
// 합산 결과에 더한다.
// 다시 오름차순으로 정렬한다. 반복!
// 합산 후 다시 뽑을때도 가장 작은 두 뭉치를 뽑아야 한다. (최초 입력을 소팅한다고 해서 되지않음 e.g. 3 4 5 6)
// Fail: 메모리 초과 -> 배열말고 minHeap?
// N === 1 일때는 비교가 필요없음, 즉 0

const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n').map(Number);

function solution(inputs) {
  let result = 0;
  const N = inputs.shift();

  if (N === 1) {
    return 0;
  }

  const minHeap = new MinHeap();

  inputs.forEach(input => minHeap.push(input));

  while(minHeap.heap.length > 2) {
    const partsSum = minHeap.pop() + minHeap.pop();

    result += partsSum;
    minHeap.push(partsSum);
  }

  return result;
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
