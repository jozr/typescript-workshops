/*
TypeScript, like JavaScript, allows you to work with arrays of values.
Array types can be written in one of two ways. In the first, you use the type of
the elements followed by [] to denote an array of that element type:
*/

const listOne: number[] = [1, 2, 3];

// The second way uses a generic array type, Array<elemType>:

const listTwo: Array<number> = [1, 2, 3];
