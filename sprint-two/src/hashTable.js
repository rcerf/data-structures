var HashTable = function(){
  this._limit = 8;
  this._filled = 0;
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

HashTable.prototype.insert = function(k, v, beingRebuilt){
  beingRebuilt = beingRebuilt || false;
  var linkedList;
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    linkedList = this.makeLinkedList();
    this._filled++;
  } else {
    linkedList = this._storage.get(i);
  }
  linkedList.addToTail(k,v);
  this._storage.set(i, linkedList);
  if (!beingRebuilt) {
    if ( (this._filled / this._limit) > 0.75) {
      this.resize(this._limit * 2);
    } else if ( (this._filled / this._limit) < 0.25) {
      this.resize(this._limit / 2);
     }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var tempStorage = this._storage;
  var tempLimit = this._limit;
  this._limit = newLimit;
  this._filled = 0;
  this._storage = makeLimitedArray(this._limit);
  for(var k = 0; k < tempLimit; k++){
    var tempLinkedList = tempStorage.get(k);
    if (tempLinkedList !== undefined) {
      while (tempLinkedList[0] !== null) {
        var head = tempLinkedList.returnHead();
        this.insert(head[0], head[1], true);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var linkedList = this._storage.get(i);
  if (linkedList.contains(k)) {
    value = linkedList.returnValue(k);
    return value;
  }
  return undefined;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var linkedList = this._storage.get(i);
  if(linkedList.contains(k)){
    var nodeDelete = linkedList.returnNode(k);
    if(nodeDelete[2] === null && nodeDelete[3] !== null) {
      linkedList[0] = nodeDelete[3];
    }else if(nodeDelete[2] !== null && nodeDelete[3] === null){
      linkedList[1] = nodeDelete[2];
    }else if (nodeDelete[2] !== null && nodeDelete[3] !== null) {
      linkedList.removeNode(nodeDelete);
    } else {
      linkedList[0] = null;
      linkedList[1] = null;
    }

  }
};

HashTable.prototype.makeLinkedList = function(){
  var list = [];
  list.push(null); // list[0] is the head
  list.push(null); // list[1] is the tail

  list.addToTail = function(k,v){
    var newNode = HashTable.prototype.makeNode(k,v);
    if(list[1] === null){
      list[0] = newNode;
      list[1] = newNode;
    }else{
      list[1][3] = newNode;
      newNode[2] = list[1];
    }
    list[1] = newNode;
  };

  list.returnHead = function(){
    if(list[0]){
      var oldVal = [list[0][0], list[0][1]];
      var cached = list[0][3];
      list[0][3] = null;
      list[0] = cached;
      return oldVal;
    }
  };

  list.removeNode = function(node){
    // Add a guard when there is only one node in the index, so NULL isnt getting passed around.
    var prevNode = node[2];
    var nextNode = node[3];
    prevNode[3] = node[3];
    nextNode[2] = node[2];
  };

  list.contains = function(value, node){
    node = node || list[0];
    if(!node){
      return false;
    }
    var result = false;
    if(node[1] === value){
      result = true;
    }else if(node[3]){
      result = this.contains(value, node[3]);
    }
    return result;
  };

  list.returnNode = function(value, node) {
    node = node || list[0];
    if(node[1] === value){
      return node;
    }else if(node[3]){
      node = this.returnNode(value, node[3]);
    }
    return node;
  };

  list.returnValue = function(value, node){
    node = node || list[0];
    //var payload = null;
    if(node[1] === value){
      return node[1];
    }else if(node[3]){
      value = this.returnValue(value, node[3]);
    }
    return value;
  };

  return list;
};

HashTable.prototype.makeNode = function(k,v){
  var node = [];
  node.push(k);
  node.push(v);
  node.push(null);
  node.push(null);
  return node;
};