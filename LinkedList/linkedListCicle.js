/**
 * @param val
 * @constructor
 */
 function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} node
 *
 * @returns {Array}
 */
function serialize(node) {
  const result = [];
  let currentNode = node;

  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return result;
}

/**
 * @param {Array} data
 *
 * @returns {ListNode}
 */
function createList(data) {
  if (data.length === 0) {
    return null;
  }

  const head = new ListNode(data[0]);
  let currentNode = head;

  for (let i = 1; i < data.length; i += 1) {
    currentNode.next = new ListNode(data[i]);
    currentNode = currentNode.next;
  }

  return head;
}

/**
 * @param val
 * @constructor
 */
 function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 *
 * @returns {ListNode}
 */
function mergeTwoLists(l1, l2) {
  const array = [];

  let firstTree = l1;
  let secondTree = l2;

  if (firstTree === null && secondTree === null) {
    return [];
  }

  while (firstTree) {
    array.push(firstTree.val);
    firstTree = firstTree.next;
  }

  while (secondTree) {
    array.push(secondTree.val);
    secondTree = secondTree.next;
  }

  array.sort((a, b) => a - b);

  const head = new ListNode(array[0]);
  let currentNode = head;

  for (let i = 1; i < array.length; i += 1) {
    currentNode.next = new ListNode(array[i]);
    currentNode = currentNode.next;
  }

  return head;
}

const l1 = createList([]);
const l2 = createList([]);

const result = mergeTwoLists(l1, l2);
console.log(result);