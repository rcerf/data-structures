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
// TUrn my 2D arrays into linked list. The index itself need only contain a head and tail pointer. 
// Each array in the index need to contain the key, value and next array.

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i) === undefined) {
    var linkedList = this.makeLinkedList();
  } else {
    var linkedList = this._storage.get(i);
  }
  linkedList.addToTail(k,v);
  this._storage.set(i, linkedList);
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
  var returned = this._storage.get(i);

  var index = 0;

  while (returned[index][0] !== k && index < returned.length-1) {
    index++;
  }
  if (index < returned.length) {
    for (var j = index; j < returned.length; j++) {
      returned[j] = returned[j+1];
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
      list[1] = newNode;
      list[0] = newNode;
    } else{
      list[1][2] = newNode;
    }
    list[1] = newNode;
  };

  list.removeHead = function(){
    if(!!list[0]){
      var cached = list[0][3];
      var oldVal = list[0].value;
      list.head.next = null;
      list.head = cached;
      return oldVal;
    }
  };

  list.contains = function(value, node){
    node = node || list[0];
    var result = false;
    if(node[1] === value){
      result = true;
    }else if(node[2]){
      result = this.contains(value, node[2]);
    }
    return result;
  };

  list.returnValue = function(value, node){
    node = node || list[0];
    //var payload = null;
    if(node[1] === value){
      return node[1];
    }else if(node[2]){
      value = this.returnValue(value, node[2]);
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
  return node;
};

/*

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


*/