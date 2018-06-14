

// Instantiate a new graph
var Graph = function() {
  this.edgeCount = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //loop through edges of node to be removed
    //remove edge from connected node
  for (var key in this) {
    for (var edges in this[key]){
      if (this[key][edges] === node){
        delete this[key][edges];
      }
    }
    //key represents the index in edges
  //   var connected = this[node][key];
  //   for (var edgeKey in connected) {
  //     if (connected[edgeKey] === node) {
  //       delete connected[edgeKey];
  //     }
  //   }
  }

  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this[fromNode]) {
    if (this[fromNode][key] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //add nodes to eachothers edge objects
  this[fromNode][this.edgeCount] = toNode;
  this[toNode][this.edgeCount] = fromNode;
  this.edgeCount++;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this[fromNode]) {
    if (this[fromNode][key] === toNode) {
      delete this[fromNode][key];
    }
  }
  for (var key in this[toNode]) {
    if (this[toNode][key] === fromNode) {
      delete this[toNode][key];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] === 'object') {
      cb(Number(key));
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


