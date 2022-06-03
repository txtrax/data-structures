var Queue = function() {
  var someInstance = {
    storage: {},
    head: 0,
    tail: 0
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
  },

  dequeue: function() {
    var first = this.storage[this.head];

    delete this.storage[this.head];
    this.size() && this.head++;

    return first;
  },

  size: function() {
    return this.tail - this.head;
  }
};