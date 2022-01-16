class StackArray {
  constructor(size) {
    this.data = new Array(size);
    this.top = -1;
  }

  isEmpty() {
    return this.top < 0;
  }

  ifFull() {
    return this.top === this.data.length - 1;
  }

  push(value) {
    if (this.ifFull()) {
      console.log('is full');

      return;
    }

    this.top += 1;
    this.data[this.top] = value;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('stack is empty');

      return null;
    }

    return this.data[this.top];
  }

  pop() {
    if (this.isEmpty()) {
      console.log('stack is empty');

      return null;
    }

    const value = this.peek();

    this.top -= 1;

    return value;
  }
}

const stack = new StackArray(2);

stack.push(1);
stack.push(2);

console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
stack.push(14);

console.log(stack);
