var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  //Push value to children array
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //base case
  if (this.value === target) {
    return true;
  }
  //recursion case
  let child = this.children;
  for (let i = 0; i < child.length; i++) {
    if (child[i].contains(target)) {
      return true;
    };
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
