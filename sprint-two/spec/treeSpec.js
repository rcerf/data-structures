describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
  it("should add a child to a tree node", function() {
    var images = tree.addChild("images");
    expect(tree.children[0]).toEqual(images);
    var imageOne = images.addChild("/images/this.png");
    var imageTwo = images.addChild("/images/that.png");
    expect(images.children.length).toEqual(2);
  });

  it("should determine if a given node or it's children have a value using the .contains() method", function() {
    var images = tree.addChild("images");
    var links = tree.addChild("links");
    var imageOne = images.addChild("/images/this.png");
    var imageTwo = images.addChild("/images/that.png");
    var linkOne = links.addChild("http://www.here.com");
    expect(tree.contains("http://www.here.com")).toEqual(true);
    expect(tree.contains("lolcatzzzzz")).toEqual(false);
  });

  it("should be able to find a child node and return it (based in value) using .find()", function() {
    var images = tree.addChild("images");
    var links = tree.addChild("links");
    var imageOne = images.addChild("/images/this.png");
    var imageTwo = images.addChild("/images/that.png");
    var linkOne = links.addChild("http://www.here.com");
    expect(tree.find("http://www.here.com")).toEqual(linkOne);
    expect(tree.find("A missing node")).toEqual(null);
  });

  it("should know the parent of the top most node is null", function(){
    tree.addChild("Hello");
    expect(tree.parent).toEqual(null);
  });

  it("should know the parent of a child node", function(){
    var hello = tree.addChild("Hello");
    var goodbye = hello.addChild("goodbye");
    expect(goodbye.parent.value).toEqual("Hello");
  });

  it("should traverse the tree with the .traverse() method", function() {
    var items = ["head", "images", "/images/this.png", "/images/that.png",  "links", "http://www.here.com"];
    var images = tree.addChild("images");
    var links = tree.addChild("links");
    var imageOne = images.addChild("/images/this.png");
    var imageTwo = images.addChild("/images/that.png");
    var linkOne = links.addChild("http://www.here.com");
    var i = 0;
    tree.traverse(function(value) {
      expect(value).toEqual(items[i++]);
    });

  });
});