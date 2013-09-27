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
    console.log(set);
    set.add("Hello");
    console.log(set);
    expect(set._storage["Hello"]).toEqual(true);
  });
});