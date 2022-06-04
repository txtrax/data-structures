class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(value) {
    let keys = Object.keys(this.storage);
    let last = keys[keys.length - 1];
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    var first = this.storage[this.head];

    delete this.storage[this.head];
    this.size() && this.head++;

    return first;
  }

  size() {
    return this.tail - this.head;
  }
}
const queue1 = new Queue();
