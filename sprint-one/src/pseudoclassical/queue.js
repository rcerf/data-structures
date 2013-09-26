var Queue = function() {
  // Use an object with numeric keys to store values
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value){
  this.start++;
  this.storage[this.start] = value;
};

Queue.prototype.dequeue = function(){
  this.size() && this.end++
  var val = this.storage[this.end];
  delete this.storage[val];
  return val;
};

Queue.prototype.size = function(){
  return this.start - this.end;
};