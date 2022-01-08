class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  prepend(value) {
    const newObj = new Node(value);

    const currentNode = this.head;

    newObj.next = currentNode;
    this.head = newObj;
  }

  append(value) {
    const newObj = new Node(value);

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newObj;
  }

  findIndex(position) {
   if (!position) {
     return null;
   }

    let currentNode = this.head;

    for (let i = 0; i < position; i++) {
      if (currentNode === null) {
        return null;
      }

      currentNode = currentNode.next;
    }

    return currentNode.value;
  }

  deleteValue(value) {
    let currentNode = this.head;
    let prevNode = null;

    if (currentNode.value === value) {
      this.head = currentNode.next;
      return;
    }

    while (currentNode !== null && currentNode.value !== value) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      return null;
    }

    prevNode.next = currentNode.next;
  }
}

const list = new LinkedList(5);

list.prepend(2);
list.append(12);
list.deleteValue(12)

console.log(list)