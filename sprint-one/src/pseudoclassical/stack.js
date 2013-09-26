var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this.instanceSize = 0; // Hint: set an initial value here

  // Implement the methods below
};

Stack.prototype.push = function(value){
  this.instanceSize++;
  this.storage[this.instanceSize] = value;
};

Stack.prototype.pop = function(){
  var val = this.storage[this.instanceSize];
  this.instanceSize && this.instanceSize--;
  return val;
};

Stack.prototype.size = function(){
  return this.instanceSize;
};

