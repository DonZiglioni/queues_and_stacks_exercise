/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
      this.size++;
    } else {
      const currentNode = this.first;
      newNode.next = currentNode;
      this.first = newNode;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) {
      throw new Error("Nothing to remove...");
    }
    if (this.first === this.last) {
      let removedVal = this.first.val;
      this.first = null;
      this.last = null;
      this.size--;
      return removedVal;
    } else {
      let removedVal = this.first.val;
      this.first = this.first.next;
      this.size--;
      return removedVal;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.first) {
      return this.first.val;
    } else {
      throw new Error("Nothing to see here...")
    }

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.first && !this.last) {
      return true;
    } else {
      return false;
    }
  }
}

// const myStack = new Stack()
// myStack.push(23)
// myStack.push(24)
// myStack.push(25)
// myStack.peek()

// console.log("MY STACK: ", myStack);

module.exports = Stack;
