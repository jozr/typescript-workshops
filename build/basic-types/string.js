"use strict";
/*
Another fundamental part of creating programs in JavaScript for webpages and
servers alike is working with textual data. As in other languages, we use the
type string to refer to these textual datatypes. Just like JavaScript,
TypeScript also uses double quotes (") or single quotes (') to surround string
data.
*/
let color = "blue";
color = 'red';
/*
You can also use template strings, which can span multiple lines and have
embedded expressions. These strings are surrounded by the backtick/backquote (`)
character, and embedded expressions are of the form ${ expr }.
*/
const fullName = `Bob Bobbington`;
const age = 37;
let sentence = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
// This is equivalent to declaring sentence like so:
sentence = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
//# sourceMappingURL=string.js.map