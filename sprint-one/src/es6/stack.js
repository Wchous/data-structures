class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stackSize = 0;
  }

  push(val) {
    this[this.stackSize] = val;
    this.stackSize++;
  }

  pop() {
    if (this.stackSize > 0) {
      this.stackSize--;
    }
    var removed = this[this.stackSize];
    delete this[this.stackSize];
    return removed;
  }

  size() {
    return this.stackSize;
  }

}