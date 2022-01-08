class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor (value) {
    this.head = new Node(value);
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    const node = new Node(value);
    
    let lastNode = this.head;

    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    lastNode.next = node;
  }

  insertAfter(position, value) {
    const node = new Node(value);

    let parentNode = this.head;

    for (let i = 0; i < position; i += 1) {
      if (parentNode.next === null) {
        break;
      }

      parentNode = parentNode.next;
    }

    node.next = parentNode.next;
    parentNode.next = node;
  }

  deleteNode(value) {
    let currentNode = this.head;
    let previousNode = null;

    if (currentNode.value === value) {
      this.head = currentNode.next; 

      return;
    }

    while(currentNode !== null && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      return;
    } 

    previousNode.next = currentNode.next;
  }

  deletePositionNode(position) {
    if (position === 0) {
      this.head = this.head.next;

      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i < position; i++) {
      if (currentNode === null) {
        return;
      }
      
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;
  }

  searchByValue(value) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
} 

const list = new LinkedList(2);

list.prepend(1);

list.append(5);

list.insertAfter(1, 3);
list.insertAfter(1, 1);
list.insertAfter(14, 13);

// list.deletePositionNode(0);
// list.deletePositionNode(1);
// list.deletePositionNode(2);
// list.deletePositionNode(22);

console.log(list.searchByValue(3))

// list.deleteNode(13);
// list.deleteNode(1000);
// list.deleteNode(1);
// list.deleteNode(1);

console.log(list);
