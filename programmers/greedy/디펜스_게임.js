class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex  = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (this.heap[currentIndex] < this.heap[leftIndex] ||
    this.heap[currentIndex] < this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function solution(soldiers, skipTicketAmount, enemy) {
  const maxHeap = new MaxHeap();

  let currentIndex = 0;

  for (let i = 0; i<enemy.length;i++) {
    if (soldiers >= enemy[i]) {
      maxHeap.push(enemy[i]);
      soldiers -= enemy[i];
    } else {
      if (!skipTicketAmount) {
        currentIndex = i;
        break;
      }

      if (maxHeap.heap.length >= 2) {
        if (maxHeap.heap[1] > enemy[i]) {
          soldiers += maxHeap.pop() - enemy[i];
          maxHeap.push(enemy[i]);
        }

        skipTicketAmount--;
      } else {
        skipTicketAmount--;
      }
    }

    if (i === enemy.length - 1) {
      currentIndex = enemy.length;
    }
  }

  return currentIndex;
}

solution(7, 3, [4, 2, 4, 5, 3, 3, 1]); // 5
solution(2, 4, [3, 3, 3, 3]); // 4
solution(7, 3, [5, 5, 5, 5, 2, 3, 1]); // 5
solution(10, 1, [2, 2, 2, 2, 2, 10]) // 6
solution(10, 1, [2, 2, 2, 2, 10]) // 5
