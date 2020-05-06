// A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

enum ColorFoo {Red, Green, Blue}
const foo: ColorFoo = ColorFoo.Green;

// By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:

enum ColorBar {Red = 1, Green, Blue}
const bar: ColorBar = ColorBar.Green;

// Or, even manually set all the values in the enum:

enum ColorBaz {Red = 1, Green = 2, Blue = 4}
const baz: ColorBaz = ColorBaz.Green;

// A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:

enum Color {Red = 1, Green, Blue}
const colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
