class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
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
