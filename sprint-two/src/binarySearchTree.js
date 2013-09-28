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
    if(!node.value){
      node.value = value;
    }else if(node.value < value){
      if(node.right){
        node.insert(value, node.right);
      }else{
        newNode = makeBinarySearchTree(value);
        node.right = newNode;
      }
    }else{
      if(node.left){
        node.insert(value, node.left);
      }else{
        newNode = makeBinarySearchTree(value);
        node.left = newNode;
      }
    }
  },

  contains: function(value, node){
    if (node === null) {
      return false;
    }
    node = node || this;
    var present = false;
    if(node.value > value){
      present = node.contains(value, node.left);
    }else if(node.value < value){
      present = node.contains(value, node.right);
    }else{
      present = true;
    }
    return present;
  },

  smallest: function(node) {
    node = node || this;
    if (node.left === null) {
      return node.value;
    } else {
      result = node.smallest(node.left);
    }
    return result;
  },

  largest: function(node) {
    node = node || this;
    var result;
    if (node.right === null) {
      return node.value;
    } else {
      result = node.largest(node.right);
    }
    return result;

  },

  depthFirstLog: function(callback, node){
    node = node || this;
    callback(node.value);
    if (node.left !== null) {
      node.depthFirstLog(callback, node.left);
    }
    if (node.right !== null) {
      node.depthFirstLog(callback, node.right);
    }
  }

};