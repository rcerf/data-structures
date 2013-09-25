var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    size++;
    for(var i = size; i>1; i--){
      storage[i] = storage[i-1];
    }
    storage[1] = value;
  };

  instance.dequeue = function(){
    var val = storage[size];
    size && size--;
    return val;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
