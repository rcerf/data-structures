var makeBinarySearchTree = function(value){
  var binarySearchTree = {
    left: null,
    right: null,
    value: value
  };

  binarySearchTree = extend(binarySearchTree, binarySearchTreeMethods);
  return binarySearchTree;
};

var extend = function(destination, source) {
  for (var key in source) {
    destination[key] = source[key];
  }
  return destination;
};

var binarySearchTreeMethods = {
  insert: function(value, node){
    var newNode;
    node = node || this;
    debugger
    if(!this.value){
      this.value = value;
    }else if(this.value < value){
      if(this.right){
        this.insert(value, this.right);
      }else{
        newNode = makeBinarySearchTree(value);
        this.right = newNode;
      }
    }else{
      if(this.left){
        this.insert(value, this.left);
      }else{
        newNode = makeBinarySearchTree(value);
        this.left = newNode;
      }
    }
  },

  contains: function(value, node){
    node = node || this;
    var present = false;
    debugger;
    if(this.value > value){
      present = this.contains(value, this.left);
    }else if(this.value < value){
      present = this.contains(value, this.right);
    }else{
      present = true;
    }
    return present;
  },
  depthFirstLog: function(){}
};
