var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.qSize = 0;
  this.keyCount = 0;
};

Queue.prototype.enqueue = function(val) {

  this[this.keyCount] = val;
  this.qSize++;
  this.keyCount++;

};

Queue.prototype.dequeue = function() {

  var first = Object.keys(this)[0];
  var removed = this[first];
  if(this.qSize > 0) {
    delete this[first];
    this.qSize--;
  }
  return removed;

};

Queue.prototype.size = function() {
  return this.qSize;
};


