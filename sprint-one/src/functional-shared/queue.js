var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {}
  obj.qSize = 0
  obj.keyCounter = 0
  _.extend(obj, queueMethods)

  return obj
};


var queueMethods = {
  enqueue: function(value){
    this[this.keyCounter] = value
    this.qSize++
    this.keyCounter++
    //console.log('e',this.qSize)
  },
  
  dequeue: function(){
    //console.log(Object.keys(this))
    var firstKey = Object.keys(this)[0]
    var removed = this[firstKey]
    if (Object.keys(this).length>5){
    delete this[firstKey]
    }
    // console.log('before', this.qSize)
    if(this.qSize > 0){
      this.qSize--
    }
    //console.log('d',this.qSize)
    // console.log('after', this.qSize)
    return removed
  },

  size: function(){
    if(this.qSize<0){
      return 0
    }    
    return this.qSize
  }
};


