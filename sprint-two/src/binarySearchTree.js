var BinarySearchTree = function(value) {
  var newBST = Object.create(BinarySearchTree.prototype);
  newBST.left = null;
  newBST.right = null;
  newBST.value = value;
  newBST.depth = 1;
  // newBST.minDepth = 1;
  // newBST.maxDepth = 1;
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
        if (this.depth > this.maxDepth) {
          this.maxDepth = this.depth;
        }
      } else {
        this.right.insert(value);
      }
    }
    if (value < this.value) {
      if (this.left === null) {
        this.left = newNode;
        newNode.depth = this.depth + 1;
        if (this.depth > this.maxDepth) {
          this.maxDepth = this.depth;
        }
      } else {
        this.left.insert(value);
      }
    }
    if (this._isUnbalanced()) {
      console.log('Rebalancing...');
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
    cb(this);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  },

  breadthFirstLog: function(cb) {
    var q = [];
    q.push(this);
    while (q.length > 0) {
      cb(q[0]);
      if (q[0].left) {
        q.push(q[0].left);
      }
      if (q[0].right) {
        q.push(q[0].right);
      }
      q.shift();
    }

  },

  _rebalance: function() {
    var nodeValues = [];
    this.depthFirstLog(function(node) {
      nodeValues.push(node.value);
    });
    nodeValues.sort(function(a, b) {
      return a - b;
    });
    var medianIndex = Math.ceil(nodeValues.length / 2);
    var medianValue = nodeValues.splice(medianIndex, 1).pop();
    var rebalanced = BinarySearchTree(medianValue);
    nodeValues.forEach(function(nodeVal) {
      rebalanced.insert(nodeVal);
    });
    return rebalanced;
  },

  _isUnbalanced: function() {
    var depthArr = [];

    this.depthFirstLog(function(node) {
      if (node.left === null && node.right === null) {
        depthArr.push(node.depth);
      }
    });
    var minDepth = Math.min(...depthArr);
    var maxDepth = Math.max(...depthArr);

    return maxDepth > (minDepth * 2);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
