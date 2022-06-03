var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    key && key--;

    var last = storage[key];
    delete storage[key];

    return last;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};