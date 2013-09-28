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
    expect(linkedList.tail.value).toEqual(7);
  });

  it("can remove head", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(12);
    linkedList.removeHead();
    expect(linkedList.removeHead()).toEqual(12);
    linkedList.removeHead();
  });

  it("can find whether linkedList contains a value", function(){
    linkedList.addToTail(10);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    expect(linkedList.contains(5)).toEqual(true);
  });

  it("can add to the head of the list", function() {
    linkedList.addToHead(3);
    linkedList.addToHead(1);
    expect(linkedList.contains(1)).toEqual(true);
    expect(linkedList.removeHead()).toEqual(1);
  });


  it("can remove the tail and return the value", function() {
    linkedList.addToTail(10);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    linkedList.removeTail();
    expect(linkedList.removeTail()).toEqual(5);
  });
});