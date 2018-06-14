var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.qSize = 0;
  obj.keyCount = 0;

  return obj;
};

var queueMethods = {

  enqueue : function(val) {
    this[this.keyCount] = val;
    this.keyCount++;
    this.qSize++;
  },

  dequeue : function() {
    var first = Object.keys(this)[0];
    var removed = this[first];
    if (this.qSize>0){
      delete this[first];
      this.qSize--;
    }
    return removed;
  },

  size : function() {
    return this.qSize;
  }
};


