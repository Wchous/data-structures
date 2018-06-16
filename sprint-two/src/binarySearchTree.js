var BinarySearchTree = function(value) {
  var newBST = Object.create(BinarySearchTree.prototype);
  newBST.left = null;
  newBST.right = null;
  newBST.value = value;
  newBST.depth = 1;
  return newBST;
};

//compare incoming value to first node value
//if greater, check if right is null
  //if it is null, set node.right to new node with insert value
    //if not null, run insert on rightside node
//if less, check if left is null
  // if it is, node.left equals incoming node 
    //if it's not, run insert on left side


BinarySearchTree.prototype = {
  insert: function(value) {
    var newNode = BinarySearchTree(value);
    if (value > this.value) {
      if (this.right === null) {
        this.right = newNode;
        newNode.depth = this.depth + 1;
      } else {
        this.right.insert(value);
      }
    }
    if (value < this.value) {
      if (this.left === null) {
        this.left = newNode;
        newNode.depth = this.depth + 1;
      } else {
        this.left.insert(value);
      }
    }   
  },
  
  contains: function(target) {
    if (this.value === target) {
      return true;
    }
    if (target > this.value && this.right !== null) {
      return this.right.contains(target);
    }
    if (target < this.value && this.left !== null) {
      return this.left.contains(target);
    }
    return false;
  },
  
  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  },

  breadthFirstLog: function(cb) {
    cb(this.value);

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
