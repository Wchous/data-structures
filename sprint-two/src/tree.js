var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
  newNode.parent = this;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  this.parent.children = this.parent.children.filter(function(elem) {
    return !this;
  });
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  if (this.value) {
    cb(this.value);
  }
  this.children.forEach(function(child) {
    child.traverse(cb);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
