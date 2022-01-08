// Create class LinkedList with next methods:

// append(value) - adds value to the end of the list
// prepend(value) - adds value to the beginning of the list
// size() - returns the number of nodes present in the linked list
// getLast() - returns the last node's value (null for an empty list)
// getFirst() - returns the first node's value (null for an empty list)
// clear() - empties out the list
// delete(value) - deletes a node which contains the given value
// serialize() - returns an array of list's nodes' values


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

list.size(); // 0
list.append(1);
list.size(); // 1
list.getLast(); // 1;
list.getFirst(); // 1;
list.append(2);
list.getFirst(); // 1
list.getLast(); // 2
list.prepend(3);
list.getFirst(); // 3
list.getLast(); // 2
list.serialize(); // [3, 1, 2]
list.size(); // 3
list.delete(1);
list.size(); // 2
list.serialize(); // [3, 2]
list.clear();
list.size(); // 0
list.serialize(); // []



let count = 0;

const stringArray = stones.split('');

stringArray.forEach((el, i) => {
  if (el === stringArray[i + 1]) {
    count++;
  }
});

return count;