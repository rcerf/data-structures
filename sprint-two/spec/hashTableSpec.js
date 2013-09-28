describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2', v3 = 'val3', v4 = 'val4', v5 = 'val5';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    hashTable.insert(v3, v3);
    hashTable.insert(v4, v4);
    hashTable.insert(v5, v5);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
    expect(hashTable.retrieve(v5)).toEqual(v5);
  });

  //add more tests!
  it("should be able to remove a key" , function() {
    var v1 = 'val1', v2 = 'val2', v3 = 'val3', v4 = 'val4';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    hashTable.insert(v3, v3);
    hashTable.insert(v4, v4);
    hashTable.remove(v3);
    expect(hashTable.retrieve(v3)).toEqual(undefined);
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    hashTable.insert(v3, v3);
    hashTable.insert(v4, v4);
    hashTable.remove(v3);
    expect(hashTable.retrieve(v3)).toEqual(undefined);
  });

  it("should be able to increase the max limit of the hashtable index once the table is more than 75% full", function(){
    var v1 = 'val1', v2 = 'val2', v3 = 'val3', v4 = 'val4', v5 = 'val5', v6 = 'val6', v7 = 'val7', v8 = 'val8';
    var v10 = 'val10', v20 = 'val20', v30 = 'val30', v40 = 'val40', v50 = 'val50', v60 = 'val60', v70 = 'val70', v80 = 'val80';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    hashTable.insert(v3, v3);
    hashTable.insert(v4, v4);
    expect(hashTable.retrieve(v4)).toEqual(v4);
    hashTable.insert(v5, v5);
    hashTable.insert(v6, v6);
    hashTable.insert(v7, v7);
    hashTable.insert(v8, v8);
    hashTable.insert(v10, v10);
    hashTable.insert(v20, v40);
    hashTable.insert(v30, v40);
    hashTable.insert(v40, v40);
    hashTable.insert(v50, v50);
    hashTable.insert(v60, v60);
    hashTable.insert(v70, v70);
    hashTable.insert(v80, v80);
    expect(hashTable.retrieve(v4)).toEqual(v4);
  });
});
