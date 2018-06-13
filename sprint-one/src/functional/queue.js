var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0 
  var keyCount = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[keyCount] = value
    size++
    keyCount++
  };

  someInstance.dequeue = function() {
    var first = Object.keys(storage)[0]
    var removed = storage[first]
    delete storage[first]
    size--
    return removed
  };

  someInstance.size = function() {
    if(size<0){
      return 0
    }
    return size
  };
  return someInstance;
};
