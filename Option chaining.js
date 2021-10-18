// This function returns the square of the value passed to it.
function square(x, log) { // The second argument is an optional function
    log?.(x);             // Call the function if there is one
    return x * x;         // Return the square of the argument
}

console.log(square(3, (x) => { console.log(x) }));

console.log(square(5));