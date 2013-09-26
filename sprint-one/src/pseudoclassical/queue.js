var Queue = function() {
  // Use an object with numeric keys to store values
  this.storage = {};
  this.queueSize = 0;
};


Queue.prototype.enqueue = function(value){
  this.queueSize++;
  for(var i = this.queueSize; i>1; i--){
    this.storage[i] = this.storage[i-1];
  }
  this.storage[1] = value;
};

Queue.prototype.dequeue = function(){
  var val = this.storage[this.queueSize];
  this.queueSize && this.queueSize--;
  return val;
};

Queue.prototype.size = function(){
  return this.queueSize;
};