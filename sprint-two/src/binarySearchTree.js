var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  //if value less than right add to left
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
  this.value = val;
};

BinarySearchTree.prototype.contains = function(val) {
  if (val === this.value) {
    return true;
  } else if (val < this.value) {
    return this.left.contains(val);
  } else if (val > this.value) {
    return this.right.contains(val);
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {

};

// var tree = new BinarySearchTree(4);

/*
 * Complexity: What is the time complexity of the above functions?
 */
