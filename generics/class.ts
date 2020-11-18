// Generic Classes

// A generic class has a similar shape to a generic interface.
// Generic classes have a generic type parameter list in angle brackets (<>)
// following the name of the class.

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};
