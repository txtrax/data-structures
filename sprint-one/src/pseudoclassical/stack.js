var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  let keys = Object.keys(this.storage);
  let length = keys.length;

  this.storage[length] = value;
};

Stack.prototype.pop = function() {
  let keys = Object.keys(this.storage);
  let lastKey = keys.length - 1;
  let poppedValue = this.storage[lastKey];

  delete this.storage[lastKey];

  return poppedValue;
};

Stack.prototype.size = function() {
  let keys = Object.keys(this.storage);

  return keys.length;
};

const stack1 = new Stack();
