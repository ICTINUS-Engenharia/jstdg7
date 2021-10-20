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

let options = { timeout: 0, title: "", verbose: false, n: null };
console.log(options.timeout ?? 1000)     // => 0: as defined in the object
console.log(options.title ?? "Untitled") // => "": as defined in the object
console.log(options.verbose ?? true)     // => false: as defined in the object
console.log(options.quiet ?? false)      // => false: property is not defined
console.log(options.n ?? 11)             // => 10: property is null