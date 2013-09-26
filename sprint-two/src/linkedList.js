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
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.head){
      var cached = list.head.next;
      list.head.next = null;
      list.head = cached;
    }
  };

  list.contains = function(){

  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
