var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function() {
  var first = this.storage[this.head];

  delete this.storage[this.head];
  this.size() && this.head++;

  return first;
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};