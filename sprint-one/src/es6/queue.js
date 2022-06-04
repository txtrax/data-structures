class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  enqueue(value) {
    let keys = Object.keys(this.storage);
    let last = keys[keys.length - 1];

    this.storage[last + 1] = value;
  };

  dequeue() {
    let keys = Object.keys(this.storage);
    let first = keys[0];
    let dequeued = this.storage[first];

    delete this.storage[first];

    return dequeued;
  };

  size() {
    let keys = Object.keys(this.storage);

    return keys.length;
  };
}
const queue1 = new Queue();
