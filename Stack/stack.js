class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.data = null;
  }

  isEmpty() {
    return this.data === null;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.data === null) {
      this.data = newNode;
    } else {
      newNode.next = this.data;
      this.data = newNode;
    }
  }

  /**
   * Return stack size
   *
   * @returns {number}
   */
  size() {
    if (this.isEmpty()) {
      return 0;
    }

    let size = 0;
    let current = this.data;

    while (current !== null) {
      size += 1;
      current = current.next;
    }

    return size;
  }

  /**
   * Return the last added value
   *
   * @returns {number|null}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data.value;
  }

  /**
   * Return the last added value and remove it from the stack
   *
   * @returns {number|null}
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.peek();

    this.data = this.data.next;

    return value;
  }

  /**
   * Empty the stack
   *
   * @returns {void}
   */
  clear() {
    this.data = null;
  }

  /**
   * Serialize the stack
   *
   * @returns {number[]}
   */
  serialize() {
    if (this.isEmpty()) {
      return [];
    }

    const array = [];
    let currentNode = this.data;

    while (currentNode !== null) {
      array.push(currentNode.value);

      currentNode = currentNode.next;
    }

    return array;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(1);

stack.push(1);
stack.push(1);

function removeAdjacentDuplicates(S) {
  let array = [];

  for (let i = 0; i < S.length; i++) {
    const currentLetter = S.charAt(i);
    const lastIndex = array.length - 1;
    const lastElement = array[lastIndex];

    if (!array.length) {
      array.push(currentLetter);

      continue;
    }

    if (currentLetter === lastElement) {
      array = array.splice(lastIndex, 1);

      continue;
    }


    array.push(currentLetter);
  }

  return array.join('');
}

