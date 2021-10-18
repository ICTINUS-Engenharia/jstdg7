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

const geval = eval;               // Using another name does a global eval
let x = "global", y = "global";   // Two global variables
function f() {                    // This function does a local eval
    let x = "local";              // Define a local variable
    eval("x += 'changed';");      // Direct eval sets local variable
    return x;                     // Return changed local variable
}
function g() {                    // This function does a global eval
    let y = "local";              // A local variable
    geval("y += 'changed';");     // Indirect eval sets global variable
    return y;                     // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":