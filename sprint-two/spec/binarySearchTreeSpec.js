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
    debugger;
    binarySearchTree.insert(5);
    binarySearchTree.insert(1);
    //binarySearchTree.insert(3);
    //binarySearchTree.insert(7);
    // expect(binarySearchTree.contains(3)).toEqual(true);
    // expect(binarySearchTree.contains(10)).toEqual(false);
  });

  // it("should be able to insert a value properly", function(){
  //   binarySearchTree.insert(5);
  //   binarySearchTree.insert(1);
  //   binarySearchTree.insert(3);
  //   binarySearchTree.insert(7);
  //   expect(binarySearchTree.leftmost()).toEqual(1);
  // });
});