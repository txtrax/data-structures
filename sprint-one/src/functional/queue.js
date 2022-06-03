var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    let keys = Object.keys(storage);
    let last = keys[keys.length - 1];

    storage[last + 1] = value;
  };

  someInstance.dequeue = function() {
    let keys = Object.keys(storage);
    let first = keys[0];
    let dequeued = storage[first];

    delete storage[first];

    return dequeued;
  };

  someInstance.size = function() {
    let keys = Object.keys(storage);

    return keys.length;
  };

  return someInstance;
};
