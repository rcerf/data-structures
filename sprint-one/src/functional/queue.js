var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    start++;
    storage[start] = value;
  };

  instance.dequeue = function(){
    instance.size() && end++
    var val = storage[end];
    delete storage[val];
    return val;
  };

  instance.size = function(){
    return start - end;
  };

  return instance;
};
