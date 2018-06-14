var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //to start, the first node is going to be the head and the tail
  //whatever is added will be the new tail and the previous tail will point
  //to the value of the new node
  //adding to tail, reassign tail & reassign prev node to tail value

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target, currentNode) {
    currentNode = currentNode || this.head;

    if (currentNode.value === target) {
      return true;
    }

    if(currentNode.next === null) {
      return false;
    }else{
      return this.contains(target, currentNode.next);
    }

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
 */
