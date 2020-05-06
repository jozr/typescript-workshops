// string
var string = "foo";
// boolean
var boolean = false;
// enum
var Enum;
(function (Enum) {
    Enum[Enum["one"] = 1] = "one";
    Enum[Enum["two"] = 2] = "two";
    Enum[Enum["three"] = 3] = "three";
})(Enum || (Enum = {}));
var fooFunction = function (array) {
    array.forEach(function (message) { return console.log(message); });
};
fooFunction(['hello', 'world']);
