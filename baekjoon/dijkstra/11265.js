const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  swap(aIndex, bIndex) {
    [this.heap[aIndex], this.heap[bIndex]] = [this.heap[bIndex], this.heap[aIndex]];
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  push(newValue) {
    // 1. 현재 마지막 리프 노드 다음으로 우선 삽입
    // 2. 부모와 비교했을 때 자식이 작으면 부모와 위치를 바꾼다.
    // 3. 부모의 인덱스는 자식 인덱스 / 2

    this.heap.push(newValue);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex && this.heap[parentIndex].weight > newValue.weight) {
      this.swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    // 마지막 정점 노드를 루트 노드로 대체한다.
    const minValue = this.heap[1];

    // pop 할 것이 있는지 확인
    if (this.heap.length <= 2) {
      this.heap = [null];
    } else {
      this.heap[1] = this.heap.pop();
    }

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 왼쪽 노드가 없으면 오른쪽도 없음
    if (!this.heap[leftIndex]) {
      return minValue;
    }

    // 오른쪽 노드가 없으면 왼쪽만 있음
    if (!this.heap[rightIndex]) {
      if (this.heap[currentIndex].weight > this.heap[leftIndex].weight) {
        this.swap(currentIndex, leftIndex);
      }

      return minValue;
    }

    // 왼쪽과 오른쪽 자식이 자신 보다 모두 클때까지 (minheap)

    while (
      this.heap[leftIndex] &&
      this.heap[rightIndex] &&
      this.heap[currentIndex].weight > this.heap[leftIndex].weight &&
      this.heap[currentIndex].weight > this.heap[rightIndex].weight
      ) {
      const minIndex = this.heap[leftIndex].weight > this.heap[rightIndex].weight ? rightIndex : leftIndex;

      this.swap(currentIndex, minIndex);

      currentIndex = minIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return minValue;
  }
}

function solution(inputs) {
  const [N, M] = inputs.shift();
  const map = inputs.slice(0, N);
  const requests = inputs.slice(N);

  const dist = Array.from({length: N + 1},
    () => Array.from({length: N + 1},
      () => Infinity
    )
  );

  for (let i = 1; i <= N; i++) {
    dist[i][i] = 0;
    const minHeap = new MinHeap();
    minHeap.push({node: i, weight: 0});

    while (!minHeap.isEmpty()) {
      const {node: current, weight: currentWeight} = minHeap.pop();
      if (dist[i][current] < currentWeight) continue;

      for (let next = 1; next <= N; next++) {
        if (current === next) continue;
        const nextWeight = currentWeight + map[current - 1][next - 1];

        if (dist[current][next] > nextWeight) {
          dist[current][next] = nextWeight;
          minHeap.push({node: next, weight: nextWeight});
        }
      }
    }
  }

  return requests
    .map(([from, to, time]) => dist[from][to] > time ? "Stay here" : "Enjoy other party")
    .join('\n');
}

console.log(solution(inputs));
