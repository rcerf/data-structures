var makeTree = function(value){
  var newTree = {};
  newTree.value = value || "head";
  newTree.children = [];
  newTree.parent = null;
  newTree = extend(newTree, treeMethods);
  return newTree;
};

var extend = function(destination, source) {
  for (var key in source) {
    destination[key] = source[key];
  }
  return destination;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  this.children.push(child);
  return child;
};

treeMethods.contains = function(value, node){
  node = node || this;
  var found = false;
  if (node.value === value) {
    found = true;
  } else if (node.children.length) {
    for(var i = 0; i<node.children.length; i++){
      found = node.contains(value, node.children[i]);
    }
  }
  return found;
};

treeMethods.traverse = function(callback, node) {
  node = node || this;
  callback(node.value);
  if (node.children.length === 0){
    return;
  }
  for (var i = 0; i < node.children.length; i++){
    this.traverse(callback, node.children[i]);
  }
};

treeMethods.find = function(value, node){
  node = node || this;
  var foundNode = null;
  if (node.value === value) {
    foundNode = node;
  } else if (node.children.length) {
    for(var i = 0; i<node.children.length; i++){
      foundNode = node.find(value, node.children[i]);
    }
  }
  return foundNode;
};