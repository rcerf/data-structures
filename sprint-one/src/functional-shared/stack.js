var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.instanceSize = 0; // Hint: set an initial value here

  // Implement the methods below
  _.extend(instance, stackMethods);
  console.log(instance);
  return instance;
};

var stackMethods = {
  push: function(value){
    this.instanceSize++;
    this.storage[this.instanceSize] = value;
  },

  pop: function(){
    var val = this.storage[this.instanceSize];
    this.instanceSize && this.instanceSize--;
    return val;
  },

  size: function(){
    return this.instanceSize;
  }
};



