const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = 0;
  const N = inputs.shift();

  const minHeap = new MinHeap();

  let schedules = inputs
    .map(input => input.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  minHeap.push(schedules[0][1]);

  // 최소힙 (우선순위 힙)으로 구현
  // 시작 시간이 빠른순으로 정렬
  // 맨 처음 시작하는 강의의 종료 시간을 최소힙에 삽입
  // 이후 강의의 시작시간보다 힙의 최소값이 더 작으면 강의는 종료되었고, 새로운 강의 시작

  for (let i =1; i<N; i++) {
    if (schedules[i][0] < minHeap.heap[1]) {
      minHeap.push(schedules[i][1]);
    } else {
      minHeap.pop();
      minHeap.push(schedules[i][1]);
    }
  }

  return minHeap.heap.length -1;
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
