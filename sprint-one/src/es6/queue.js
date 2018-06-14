class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.qSize = 0;
    this.keyCount = 0;
  }
  enqueue(val) {
    this[this.keyCount] = val;
    this.keyCount++;
    this.qSize++;
  }

  dequeue() {
    var first = Object.keys(this)[0];
    var removed = this[first];
    if(this.qSize > 0){
      delete this[first];
      this.qSize--;
    }
    return removed;
  }

  size() {
    return this.qSize;
  }

}
