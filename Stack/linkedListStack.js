class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;

      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;

      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * Return list size
   *
   * @returns {number}
   */
  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }

  /**
   * Return the last node's value
   *
   * @returns {number|null}
   */
  getLast() {
    if (!this.head) {
      return null;
    }

    let last = this.head;

    while (last.next !== null) {
      last = last.next;
    }

    return last.value;
  }

  /**
   * Return the first node's value
   *
   * @returns {number|null}
   */
  getFirst() {
    if (!this.head) {
      return null;
    }

    return this.head.value;
  }

  /**
   * Empty the list
   *
   * @returns {void}
   */
  clear() {
    this.head = null;
  }

  /**
   * Delete node by its value
   * @param {number} value
   *
   * @returns {void}
   */
  delete(value) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode && currentNode.value !== value) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = currentNode.next;
  }

  deletePosition(position) {
    if (position === 0) {
      this.head = this.head.next;

      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    for (let i = 0; i < position; i++) {
      if (currentNode === null) {
        return null;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = currentNode.next;
  }

  /**
   * Serialize the list
   *
   * @returns {number[]}
   */
  serialize() {
    const array = [];

    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const linkedList = new LinkedList();

class Stack {
  constructor() {
    this.data = new LinkedList()
  }

  isEmpty() {
   return this.data.head === null;
  }

  push(value) {
    this.data.prepend(value);
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Peek: is empty');

      return null;
    }

    return this.data.head.value;
  }

  pop() {
   if (this.isEmpty()) {
    console.log('Pop: is empty');

    return null;
   }

    const firstValue = this.peek();
  
    this.data.deletePosition(0);

    return firstValue;
  }
}

const stack = new Stack();

stack.push(2);
stack.push(3);

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())



