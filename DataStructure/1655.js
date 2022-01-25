//최대 힙, 최소 힙을 사용하는 문제이다.
//우선, 최대 힙, 최소 힙 구현을 해보자.

class Heap {
  constructor() {
    this.items = [];
  }
  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  parent(index) {
    return this.items[this.parentIndex(index)];
  }
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}
class MinHeap extends Heap {
  //bubbleUp
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  //bubbleDown
  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }
  //add
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }
  //poll
  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }
}
class MaxHeap extends MinHeap {
  //bubbleUp
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) < this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  //bubbleDown
  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) > this.items[index] ||
        this.rightChild(index) > this.items[index])
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) > this.items[largerIndex]
      ) {
        largerIndex = this.rightChildIndex(index);
      }
      this.swap(index, largerIndex);
      index = largerIndex;
    }
  }
}

//이 문제를 풀기 전에 중앙값 구하기를 먼저 풀어보자.
//https://www.acmicpc.net/problem/2696

function solution(n, arr) {
  const left = new MaxHeap();
  const right = new MinHeap();
  const result = [];

  for (let i = 0; i < n; i++) {
    if (left.size() > right.size()) right.add(arr[i]);
    else left.add(arr[i]);

    if (!right.size()) {
      result.push(left.peek());
    } else {
      if (left.peek() > right.peek()) {
        const tmp = left.poll();
        left.add(right.poll());
        right.add(tmp);
      }

      result.push(left.peek());
    }
  }

  return result;
}

const inputs = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(inputs.shift());

const numbers = inputs.map(Number);

const result = solution(n, numbers);

console.log(result.join("\n"));
