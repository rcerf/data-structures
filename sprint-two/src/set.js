var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  key = this.hashIt(value);
  if (!this._storage[key]) {
    this._storage[key] = value;
  }
};

setPrototype.hashIt = function(value) {
  var key = "";
  if (typeof value === 'string') {
    key = "'" + value + "'";
  } else if (typeof value === 'number') {
    key = "#" + value;
  } else if (Array.isArray(value)) {
    key += "[";
    for (var i = 0; i < value.length; i++) {
      key += value[i];
    }
    key += "]";
  } else {
    key += "{";
    for (var prop in value) {
      key += prop + ': ';
      key += value[prop] + " ";
    }
    key += "}";
  }
  return key;
};

setPrototype.contains = function(value){
  key = this.hashIt(value);
  if (this._storage[key] === undefined) {
    return false;
  }
  return true;
};

setPrototype.remove = function(value){
  key = this.hashIt(value);
  delete this._storage[key];
};
