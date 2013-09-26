describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("can add to tail", function(){
    linkedList.addToTail(10);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    console.log(linkedList);
    expect(linkedList.tail.value).toEqual(7);
  });

  it("can remove head", function(){
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual(5);
  });
});