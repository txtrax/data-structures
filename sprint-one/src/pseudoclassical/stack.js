var Stack = function() {
  this.storage = {};
  this.key = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

Stack.prototype.pop = function() {
  this.key && this.key--;

  var last = this.storage[this.key];
  delete this.storage[this.key];

  return last;
};

Stack.prototype.size = function() {
  return this.key;
};