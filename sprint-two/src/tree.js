var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
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

treeMethods.contains = function(){
};



// newTree.childred should starts as [] = each subtree node with have arrays of objects as the children, so it makes sense that when there are NO children, we just find an empty array.
// Should makeTree initiate the FIRST (most parent) node? 
// Contains should work recursively, like getElementsByClassName, except it will not need to build an arrays of nodes, it just needs find one, then recurse backwards
// addChild should make a new tree object, and it to the parent tree's ,children array. It will need to be passed the parent node(?)
// .contains should return the object, to pass in as a node in making a new child.
// var thisTree = makeTree(Head);

// var makeTree = function(value) {
// // node = node || "Head"; (?)
// newTree.value = value;
// newTree.children = [];

// treeMethods.addChild = function(node, value) {
// var addedTo = this.contains(node) {
// var newTree = makeTree(value);
// addedTo.children.push(newTree);
// }