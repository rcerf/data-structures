var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.queueSize = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.queueSize++;
  for(var i = this.queueSize; i>1; i--){
    this.storage[i] = this.storage[i-1];
  }
  this.storage[1] = value;
};

queueMethods.dequeue = function(){
  var val = this.storage[this.queueSize];
  this.queueSize && this.queueSize--;
  return val;
};

queueMethods.size = function(){
  return this.queueSize;
};

