describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree
  it("should have a working contains method", function(){
    binarySearchTree.insert(5);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(3)).toEqual(true);
    expect(binarySearchTree.contains(10)).toEqual(false);
  });

  it("should be able to insert a value properly", function(){
    binarySearchTree.insert(5);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.smallest()).toEqual(1);
    expect(binarySearchTree.largest()).toEqual(7);
    binarySearchTree.insert(0);
    expect(binarySearchTree.smallest()).toEqual(0);
    binarySearchTree.insert(10);
    expect(binarySearchTree.largest()).toEqual(10);
  });

  it("should run callbacks", function(){
    for(var i=0; i< 100; i++){
      binarySearchTree.insert(Math.floor(Math.random() * 100));
    }
    binarySearchTree.insert(100);
    expect(binarySearchTree.largest()).toEqual(100);
    binarySearchTree.depthFirstLog(function(value){
      value++;
    }, false);
    expect(binarySearchTree.largest()).toEqual(100);
    binarySearchTree.depthFirstLog(function(value){
      value++;
      return value;
    }, true);
    expect(binarySearchTree.largest()).toEqual(101);
  });

  it("should be able to log values across rows (i.e. breadth first logging)", function(){
    binarySearchTree.insert(5);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(4);
    binarySearchTree.insert(8);
    binarySearchTree.breadthFirstLog(function(value) { console.log(value) });
  });
});