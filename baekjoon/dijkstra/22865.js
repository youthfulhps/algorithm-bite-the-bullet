const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

class MinHeap {

  // node -> {nodeNumber, weight}
  constructor() {
    this.heap = [null];
  }


  swap(fromIndex, toIndex) {
    [this.heap[fromIndex], this.heap[toIndex]] = [this.heap[toIndex], this.heap[fromIndex]]
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  push(newValue) {
    this.heap.push(newValue);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex && this.heap[parentIndex].weight > this.heap[currentIndex].weight) {
      this.swap(currentIndex, parentIndex);
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
      if (this.heap[currentIndex].weight > this.heap[leftIndex].weight) {
        this.swap(currentIndex, leftIndex);
      }
      return returnValue;
    }

    while (
      this.heap[rightIndex] &&
      this.heap[leftIndex] &&
      this.heap[currentIndex].weight > this.heap[rightIndex].weight &&
      this.heap[currentIndex].weight > this.heap[leftIndex].weight
      ) {
      const minIndex = this.heap[rightIndex].weight > this.heap[leftIndex].weight ? leftIndex : rightIndex;

      this.swap(currentIndex, minIndex);

      currentIndex = minIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function movable(roads, N) {
  const next = Array.from({length: N + 1}, () => []);

  roads.forEach(([from, to, weight]) => {
    next[from].push([to, weight]);
    next[to].push([from, weight]);
  })

  return next;
}

function solution(inputs) {
  const N = inputs.shift()[0];
  const friends = inputs.shift();
  const roadCount = inputs.shift()[0];
  const roads = inputs;
  const nexts = movable(roads, N);

  const dists = [];

  friends.forEach((i) => {
    const minHeap = new MinHeap();
    const dist = Array.from({length: N + 1}, () => Infinity);
    dist[i] = 0;
    minHeap.push({node: i, weight: 0});

    while (!minHeap.isEmpty()) {
      const {node: current, weight: currentWeight} = minHeap.pop();

      nexts[current].forEach(([next, weight]) => {
        const nextWeight = currentWeight + weight;
        if (dist[next] > nextWeight) {
          dist[next] = nextWeight;
          minHeap.push({node: next, weight: nextWeight});
        }
      })
    }

    dists.push(dist);
  });

  let answer = 0;
  let farthest = 0;

  for (let i = 1; i <= N; i++) {
    const min = Math.min(...dists.map(dist => dist[i]));
    if (min > farthest) {
      farthest = min;
      answer = i;
    }
  }

  return answer;
}

console.log(solution(inputs));
