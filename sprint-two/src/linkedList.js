// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.tail === null){
      list.tail = newNode;
      list.head = newNode;
    } else{
      list.tail.next = newNode;
      newNode.prev = list.tail;
    }
    list.tail = newNode;
  };

  list.addToHead = function(value) {
    var newNode = makeNode(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.prev = newNode;
      newNode.next = list.head;
    }
    list.head = newNode;
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

  list.removeTail = function() {
    if (list.tail) {
      var cached = list.tail.prev;
      var oldVal = list.tail.value;
      list.tail.prev = null;
      list.tail = cached;
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

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.prev = null;
  node.next = null;
  return node;
};
