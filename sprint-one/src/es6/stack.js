class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    let keys = Object.keys(this.storage);
    let length = keys.length;

    this.storage[length] = value;
  };

  pop() {
    let keys = Object.keys(this.storage);
    let lastKey = keys.length - 1;
    let poppedValue = this.storage[lastKey];

    delete this.storage[lastKey];

    return poppedValue;
  };

  size() {
    let keys = Object.keys(this.storage);

    return keys.length;
  };
}

var stack1 = new Stack();