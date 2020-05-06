// Any #
// We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type checking and let the values pass through compile-time checks. To do so, we label these with the any type:

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation. You might expect Object to play a similar role, as it does in other languages. However, variables of type Object only allow you to assign any value to them. You can’t call arbitrary methods on them, even ones that actually exist:

const stillNotSure: any = 4;
stillNotSure.ifItExists(); // okay, ifItExists might exist at runtime
stillNotSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

const prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// Note: Avoid using Object in favor of the non-primitive object type as described in our Do’s and Don’ts section.

// The any type is also handy if you know some part of the type, but perhaps not all of it. For example, you may have an array but the array has a mix of different types:

const list: any[] = [1, true, "free"];

list[1] = 100;

// Void #
// void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

function warnUser(): void {
    console.log("This is my warning message");
}

// Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:

let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given

// Null and Undefined #
// In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void, they’re not extremely useful on their own:

// Not much else we can assign to these variables!
const u: undefined = undefined;
const n: null = null;

// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.
// However, when using the --strictNullChecks flag, null and undefined are only assignable to any and their respective types (the one exception being that undefined is also assignable to void). This helps avoid many common errors. In cases where you want to pass in either a string or null or undefined, you can use the union type string | null | undefined.

// Union types are an advanced topic that we’ll cover in a later chapter.
// As a note: we encourage the use of --strictNullChecks when possible, but for the purposes of this handbook, we will assume it is turned off.

// Never #
// The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns; Variables also acquire the type never when narrowed by any type guards that can never be true.

// The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

// Some examples of functions returning never:

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

// Object #
// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.

// With object type, APIs like Object.create can be better represented. For example:

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
