var DoublyLinkedList = function() {
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
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    var removed = this.head.value;
    if (this.head.next !== null) {
      this.head = this.head.next;
      this.head.previous = null;
    }else{
      this.head = null;
      this.tail = null;
    }
    return removed;
  };

  list.contains = function(target, currentNode) {
    currentNode = currentNode || this.head;

    if (currentNode.value === target) {
      return true;
    }

    if (currentNode.next === null) {
      return false;
    } else {
      return this.contains(target, currentNode.next);
    }

  };

  list.addToHead = function(value) {
    var newNode = Node(value);

    if (this.head !== null) { 
      this.head.previous = newNode;
      newNode.next = this.head;
    }else{
      this.tail = newNode;
    }
    this.head = newNode;
  };

  list.removeTail = function() {
    var removed = this.tail.value;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return removed;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

