class Stack {
  constructor() {
    this.storage = {},
    this.key = 0;
  }

  push(value) {
    this.storage[this.key] = value;
    this.key++;
  }

  pop() {
    this.key && this.key--;

    var last = this.storage[this.key];
    delete this.storage[this.key];

    return last;
  }

  size() {
    return this.key;
  }
}