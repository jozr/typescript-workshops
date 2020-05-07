"use strict";
// string
const string = "foo";
// boolean
const boolean = false;
// enum
var Enum;
(function (Enum) {
    Enum[Enum["one"] = 1] = "one";
    Enum[Enum["two"] = 2] = "two";
    Enum[Enum["three"] = 3] = "three";
})(Enum || (Enum = {}));
// function
const fooFunction = (array) => {
    array.forEach((message) => console.log(message));
};
//# sourceMappingURL=index.js.map