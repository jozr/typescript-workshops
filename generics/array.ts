// Generics are not only used for functions. They help us define even basic types like Array.

// There are two ways to type an array

const arrayOfNumbers1: number[] = [1,2,3]
const arrayOfNumbers2: Array<number> = [1,2,3]

// Usually the type[] syntax is preferrable for basic types, but the Generic type syntax can
// be easier to read for more complex types

const arrayOfFunctions1: (() => void)[] = [console.log, console.log]
const arrayOfFunctions2: Array<() => void> = [console.log, console.log]
