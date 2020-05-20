/*
An interface is a syntactical contract that an entity should conform to.
In other words, an interface defines the syntax that any entity must adhere to.

Interfaces define properties, methods, and events, which are the members of the interface.
Interfaces contain only the declaration of the members. It is the responsibility of the
deriving class to define the members. It often helps in providing a standard structure
that the deriving classes would follow.

Let’s consider an object −
*/

const person = {
   firstName: "Tom",
   lastName: "Hanks",
   sayHi: (): string => { return "Hi" }
};

/*
If we consider the signature of the object, it could be −

{
  firstName: string,
  lastName: string,
  sayHi: () => string
}

To reuse the signature across objects we can define it as an interface.

Declaring Interfaces
____________________
The interface keyword is used to declare an interface.
Here is the syntax to declare an interface:
*/

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InterfaceName {
}

// Example: Interface and Objects

interface Person {
  firstName: string,
  lastName: string,
  sayHi: () => string
}

const customer: Person = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => { return "Hi there" }
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

const employee: Person = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee Object")
console.log(employee.firstName);
console.log(employee.lastName);

/*
Classes can also be defined by interface
*/

interface FooClassInterface {
  foo: number;
  sayHello: () => void
}

class Foo implements FooClassInterface {
  foo: number

  constructor() {
    this.foo = 1
  }

  sayHello(): void {
    console.log('hello')
  }
}
