var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  //if value less than right add to left
  if (val < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    this.value = val;
  }
};

BinarySearchTree.prototype.contains = function(val) {
  if (val === this.value) {
    return true;
  }

  if (val < this.value && this.left !== null) {
    return this.left.contains(val);
  }
  if (val > this.value && this.right !== null) {
    return this.right.contains(val);
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  //recursive base case
  func(this.value);

  //recursive case
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * all operations of binarySearchTree are linear
 */
