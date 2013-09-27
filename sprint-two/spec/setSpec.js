describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should add to the set", function(){
    var set = makeSet();
    set.add("Hello");
    expect(set._storage["Hello"]).toEqual(true);
  });

  it('should determine whether an object is present.', function() {
    var set = makeSet();
    set.add("Hello");
    set.add("World");
    set.add("Dog");
    expect(set.contains("World")).toEqual(true);
  });

  it("should remove an element from the set", function() {
    var set = makeSet();
    set.add("Hello");
    set.add("World");
    set.add("Dog");
    set.remove("World");
    expect(set.contains("World")).toEqual(false);
  });
  
});