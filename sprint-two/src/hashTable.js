var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing

  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = [k,v];
  if (this.retrieveLinkedList(k) === undefined) {
    var newLinkedList = HashTable.prototype.makeLinkedList();
    this._storage.set(i, newLinkedList);
    newLinkedList.addToTail(arr);
  } else {
    var linkedList = this.retrieveLinkedList(k);
    debugger;
    console.log(linkedList);
    linkedList.addToTail(arr);
  }
};

HashTable.prototype.retrieveLinkedList = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //debugger;
  var linkedList = this.retrieveLinkedList(k);
  var result = linkedList.returns(k);
  return result;
};

HashTable.prototype.remove = function(){
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

HashTable.prototype.makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = HashTable.prototype.makeNode(value);
    if(list.tail === null){
      list.tail = newNode;
      list.head = newNode;
    } else{
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.head){
      var cached = list.head.next;
      var oldVal = list.head.value;
      list.head.next = null;
      list.head = cached;
      return oldVal;
    }
  };

  list.contains = function(value, node){
    node = node || list.head;
    var present = false;
    if(node.value === value){
      present = true;
    }else if(node.next){
      present = this.contains(value, node.next);
    }
    return present;
  };

  list.returns = function(value, node){
    node = node || list.head;
    //var payload = null;
    if(node.value === value){
      return node;
    }else if(node.next){
      node = this.contains(value, node.next);
    }
    return node;
  };

  return list;
};

HashTable.prototype.makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
