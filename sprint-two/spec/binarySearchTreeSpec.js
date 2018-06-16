describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(val) { array.push(val.value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });
  // it('should add "depth" property to each node', function() {
  //   binarySearchTree.insert(2);
  //   binarySearchTree.insert(3);
  //   binarySearchTree.insert(7);
  //   binarySearchTree.insert(6);
  //   expect(binarySearchTree.depth).to.equal(1);
  //   expect(binarySearchTree.left.depth).to.equal(2);
  //   expect(binarySearchTree.right.depth).to.equal(2);
  //   expect(binarySearchTree.left.right.depth).to.equal(3);
  //   expect(binarySearchTree.right.left.depth).to.equal(3);
  // });
  it('should execute a callback on every node, breadth-first', function() {
    var array = [];
    var func = function(val) { array.push(val.value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3, 6]);
  });

  it('should return true if BST is unbalanced', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    expect(binarySearchTree._isUnbalanced()).to.equal(true);
  });

  it('should return false if BST is balanced', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    expect(binarySearchTree._isUnbalanced()).to.equal(false);
  });

  it('should rebalance tree if max depth is more than twice the min depth', function() {
    var array = [];
    var func = function(val) { array.push(val.value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree = binarySearchTree._rebalance();
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([7, 2, 5, 6, 8, 9]);
  });
});
























