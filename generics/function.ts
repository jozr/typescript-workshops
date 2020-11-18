// Generics allow abstraction and flexibility when adding type definitions to our code.
// The easiest way to understand the concept is through examples.

// Let's take a normal TypeScript function as our starting point.

const logAndReturn1 = (arg: any): any => {
  console.log(arg);

  return arg;
}

logAndReturn1(1)
// This returns the following:
//
// 1   (printed value in console)
// > 1 (returned value)

// We'd rather have a more specific type and get rid of the `any` type warnings

















// So let's add generic typing!

const logAndReturn2 = <GenericType>(arg: GenericType): GenericType => {
  console.log(arg);

  return arg;
}



















// First thing to notice is that generic types are always in diamond braces - <GenericType>
// Often, the values inside of the diamond are one letter like follows

const logAndReturn3 = <T>(arg: T): T => {
  console.log(arg);

  return arg;
}





















// Let's say we want to make sure that this generic type is actually an Object, so that we
// can call a specific attribute to print

const helloObject1 = {
  attribute: 'hello'
}

const logAndReturn4 = <T>(object: T): T => {
  console.log(object.attribute);

  return object;
}

// TypeScript cannot be sure that the argument is actually a string



















// First, let's define the type of the object we intend to use as an argument for a generic function

interface HelloObject {
  attribute: string;
}

// Then let's define our object variable with this interface type definition

const helloObject2: HelloObject = {
  attribute: 'hello'
}

// Now, all we have to do to resolve the above error, is specify that
// the <T> generic type 'extends' this interface type

const logAndReturn5 = <T extends HelloObject>(object: T): T => {
  console.log(object.attribute);

  return object;
}

// this means all arguments to this 'logAndReturn5' _have_ to include an attribute
// called 'attribute' that has a string value

logAndReturn5( { attribute: 'foo' } )
logAndReturn5( { attribute: 1 } )

// However, the object can include more attributes that aren't defined because the generic
// type _only_ requires this one field

logAndReturn5( { attribute: 'foo', anotherAttribute: 'bar' } )




























// Generically-typed functions can also include multiple generic types

const logAndReturn6 = <T, U>(first: T, second: U): [T, U] => {
  console.log(first);
  console.log(second);

  return [first, second];
}

// Normally, the generic type names start alphabetically from 'T', so 'T', 'U', 'V', 'W'
// I think if you have more than 4 generic type values, you should reconsider your code
// or at least naming them better ;)
