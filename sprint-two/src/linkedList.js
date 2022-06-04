var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    //if no head and no tail, assign head and tail to newNode
    if (!list.head) {
      list.head = newNode;
    }
    //if there is a tail, assign it to the tail's next prop
    if (list.tail) {
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {
    let removedHead = list.head.value;
    list.head = list.head.next;

    return removedHead;
  };

  list.contains = function(target) {
    let node = list.head; //initial condition

    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next; //change initial condition
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: constant
 * removeHead: linear
 * contain: linear
 */
