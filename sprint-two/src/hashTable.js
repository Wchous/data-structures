

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  // var checkCounter = function() {
  //   return this._counter;
  // }.bind()
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(index)) {
    this._storage.set(index, []);
    this._counter++;
  }

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }

  }
  this._storage.get(index).push([k, v]);

  if (this._counter >= (this._limit * .75)) {
    console.log('resizing');
    this._resize(this._limit * 2);
  }
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] && bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  if (bucket.length === 0) {
    delete bucket;
    this._counter--;
  }
  if (this._counter <= (this._limit * .25) && this._counter > 0) {
    this._resize(this._limit * 0.5);
  }
};

HashTable.prototype._resize = function(value) {
  var _this = this;
  var oldStorage = this._storage;
  this._storage = LimitedArray(value);
  this._limit = value;
  this._counter = 0;
  oldStorage.each(function(elem) {
    for (var i = 0; i < elem.length; i++) {
      console.log(_this);
      _this.insert(elem[i][0], elem[i][1]);
    }
  });
  // this._storage = newArray; //or maybe 'this' instead of limitedArray
};

HashTable.prototype._halveTable = function() {
  var newArray = LimitedArray(this._limit * 0.5);
  this._storage.each(function(elem) {
    for (var i = 0; i < elem.length; i++) {
      newArray.insert(elem[i][0], elem[i][1]);
    }
  });

  this._storage = newArray; //or maybe 'this' instead of limitedArray
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


