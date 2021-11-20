// const benjaminButton = {
//     age: 25,
//     family: { son: 'Benadict Button' },
//     'favorite-songs': ['We are young', 'Young love', 'We aint never gettin older'],
//     '5yearPlan': 'Get younger'
// };

// const age = benjaminButton.age;
// const son = benjaminButton.family.son;
// const graddaughter = benjaminButton?.family?.daughter?.graddaughter;
// const faveSongs = benjaminButton['favorite-songs'];

// const myKey = '5yearPlan';
// const myValue = benjaminButton[myKey];  // Get Younger

// const { [myKey]: myNewValue, family: oldFamily, age: oldAge } = benjaminButton; // Destruction

// console.log(myNewValue);
// console.log(oldFamily);
// console.log(oldAge);

// This function returns the square of the value passed to it.
// function square(x, log) { // The second argument is an optional function
//     log?.(x);             // Call the function if there is one
//     return x * x;         // Return the square of the argument
// }

// console.log(square(3, (x) => { console.log(x) }));

// console.log(square(5));

let empty = {};                          // An object with no properties
let point = { x: 0, y: 0 };              // Two numeric properties
let p2 = { x: point.x, y: point.y + 1 };   // More complex values
let book = {
    "main title": "JavaScript",          // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences",                // for is reserved, but no quotes.
    author: {                            // The value of this property is
        firstname: "David",              // itself an object.
        surname: "Flanagan"
    }
};

let o = new Object();  // Create an empty object: same as {}.
let a = new Array();   // Create an empty array: same as [].
let d = new Date();    // Create a Date object representing the current time
let r = new Map();     // Create a Map object for key/value mapping

let o1 = Object.create({ x: 1, y: 2 });     // o1 inherits properties x and y.
o1.x + o1.y                               // => 3

console.log(o1);

