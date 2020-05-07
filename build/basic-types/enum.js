"use strict";
/*
A helpful addition to the standard set of datatypes from JavaScript is the enum.
As in languages like C#, an enum is a way of giving more friendly names to sets
of numeric values.
*/
var ColorFoo;
(function (ColorFoo) {
    ColorFoo[ColorFoo["Red"] = 0] = "Red";
    ColorFoo[ColorFoo["Green"] = 1] = "Green";
    ColorFoo[ColorFoo["Blue"] = 2] = "Blue";
})(ColorFoo || (ColorFoo = {}));
const foo = ColorFoo.Green;
/*
By default, enums begin numbering their members starting at 0. You can change
this by manually setting the value of one of its members. For example, we can
start the previous example at 1 instead of 0:
*/
var ColorBar;
(function (ColorBar) {
    ColorBar[ColorBar["Red"] = 1] = "Red";
    ColorBar[ColorBar["Green"] = 2] = "Green";
    ColorBar[ColorBar["Blue"] = 3] = "Blue";
})(ColorBar || (ColorBar = {}));
const bar = ColorBar.Green;
// Or, even manually set all the values in the enum:
var ColorBaz;
(function (ColorBaz) {
    ColorBaz[ColorBaz["Red"] = 1] = "Red";
    ColorBaz[ColorBaz["Green"] = 2] = "Green";
    ColorBaz[ColorBaz["Blue"] = 4] = "Blue";
})(ColorBaz || (ColorBaz = {}));
const baz = ColorBaz.Green;
/*
A handy feature of enums is that you can also go from a numeric value to the
name of that value in the enum. For example, if we had the value 2 but weren’t
sure what that mapped to in the Color enum above, we could look up the
corresponding name:
*/
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
const colorName = Color[2];
console.log(colorName); // Displays 'Green' as its value is 2 above
//# sourceMappingURL=enum.js.map