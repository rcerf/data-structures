var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.start = 0;
  instance.end = 0;

  // Implement the methods below
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.start++;
  this.storage[this.start] = value;
};

queueMethods.dequeue = function(){
  this.size() && this.end++
  var val = this.storage[this.end];
  delete this.storage[val];
  return val;
};

queueMethods.size = function(){
  return this.start - this.end;
};
