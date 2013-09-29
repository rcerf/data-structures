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
    var string = "Hello";
    set.add(string);
    var key = set.hashIt(string)
    expect(set._storage[key]).toEqual("Hello");
  });

  it('should determine whether an object is present.', function() {
    set.add("Hello");
    set.add("World");
    set.add("Dog");
    expect(set.contains("World")).toEqual(true);
  });

  it("should remove an element from the set", function() {
    set.add("Hello");
    set.add("World");
    set.add("Dog");
    set.remove("World");
    expect(set.contains("World")).toEqual(false);
  });

  it("should be able to handle numbers as well as string", function() {
    set.add(6);
    set.add("Hello");
    set.add("six");
    set.add("3");
    set.add(3);
    set.add(1);
    set.remove(3);
    expect(set.contains("3")).toEqual(true);
  });

  it("should handle any stupid thing I throw at it", function() {
    set.add({a:"hello", b:"goodbye"});
    set.add(3);
    set.add("3");
    set.add("three");
    set.add([1,2,3]);
    set.add("[123]");
    set.add('{}');
    set.remove("3");
    expect(set.contains(3)).toEqual(true);
    var arr = [1,2,3];
    set.remove(arr);
    expect(set.contains([1,2,3])).toEqual(false);
  });
});