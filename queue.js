/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (this.size > 0) {
      let currentBack = this.last;
      currentBack.next = newNode;

      this.last = newNode;
      this.size++;
    } else {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue is empty")
    }
    if (this.size === 1) {
      let removedVal = this.first.val
      this.first = null;
      this.last = null;
      this.size--;
      return removedVal
    } else if (this.size > 1) {
      let removedVal = this.first.val
      this.first = this.first.next;
      this.size--;
      return removedVal
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) {
      throw new Error("Nothing to see here...")
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.first) {
      return true;
    }
    return false;
  }
}

// const testQueue = new Queue()
// testQueue.enqueue(5)
// testQueue.enqueue(10)
// testQueue.enqueue(15)
// testQueue.enqueue(20)
// testQueue.isEmpty()
// testQueue.dequeue()
// testQueue.isEmpty()
// testQueue.dequeue()
// testQueue.isEmpty()
// testQueue.dequeue()
// testQueue.isEmpty()
// testQueue.dequeue()
// testQueue.isEmpty()

// console.log(testQueue, "SIZE: ", testQueue.size);

module.exports = Queue;
