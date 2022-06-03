var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  let keys = Object.keys(this.storage);
  let last = keys[keys.length - 1];

  this.storage[last + 1] = value;
};

Queue.prototype.dequeue = function() {
  let keys = Object.keys(this.storage);
  let first = keys[0];
  let dequeued = this.storage[first];

  delete this.storage[first];

  return dequeued;
};

Queue.prototype.size = function() {
  let keys = Object.keys(this.storage);

  return keys.length;
};

const queue1 = new Queue();
