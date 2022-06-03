var Stack = function() {
  var instance = {
    storage: {},
    key: 0
  };

  _.extend(instance, stackMethods);

  return instance;
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