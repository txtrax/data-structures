var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let keys = Object.keys(storage);
    let length = keys.length;

    storage[length] = value;
  };

  someInstance.pop = function() {
    let keys = Object.keys(storage);
    let lastKey = keys.length - 1;
    let poppedValue = storage[lastKey];

    delete storage[lastKey];

    return poppedValue;
  };

  someInstance.size = function() {
    let keys = Object.keys(storage);

    return keys.length;
  };

  return someInstance;
};
