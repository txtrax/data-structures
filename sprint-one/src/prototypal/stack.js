var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.key = 0;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },

  pop: function() {
    this.key && this.key--;

    var last = this.storage[this.key];
    delete this.storage[this.key];

    return last;
  },

  size: function() {
    return this.key;
  }
};