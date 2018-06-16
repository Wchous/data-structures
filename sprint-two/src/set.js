var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // if (Array.isArray(item) || typeof item = 'object') {

  // }
  // return this._storage.includes(item);
  var strung = JSON.stringify(item);
  for (var i = 0; i < this._storage.length; i++) {
    if (strung === JSON.stringify(this._storage[i])) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  this._storage = this._storage.filter(function(elem) {
    return JSON.stringify(elem) !== JSON.stringify(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
