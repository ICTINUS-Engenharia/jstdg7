let nome = "Luciano";
console.log(nome);

// let message = "hello";
// let i = 0, j = 0, k = 0;
// let x = 2, y = x * x; // Initializers can use previously declared variables

// const H0 = 74;         // Hubble constant (km/s/Mpc)
// const C = 299792.458;  // Speed of light in a vacuum (km/s)
// const AU = 1.496E8;    // Astronomical Unit: distance to the sun (km)

// let [x, y] = [1, 2];  // Same as let x=1, y=2
// [x, y] = [x + 1, y + 1];  // Same as x = x + 1, y = y + 1
// [x, y] = [y, x];      // Swap the value of the two variables
// [x, y]               // => [3,2]: the incremented and swapped values

// Convert [x,y] coordinates to [r,theta] polar coordinates
// function toPolar(x, y) {
//     return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
// }

// // Convert polar to Cartesian coordinates
// function toCartesian(r, theta) {
//     return [r * Math.cos(theta), r * Math.sin(theta)];
// }

// let [r, theta] = toPolar(1.0, 1.0);  // r == Math.sqrt(2); theta == Math.PI/4
// let [x, y] = toCartesian(r, theta);   // [x, y] == [1.0, 1,0]

// let o = { x: 1, y: 2 }; // The object we'll loop over
// for (const [name, value] of Object.entries(o)) {
//     console.log(name, value); // Prints "x 1" and "y 2"
// }

// let [x, y] = [1];     // x == 1; y == undefined
// [x, y] = [1, 2, 3];     // x == 1; y == 2
// [, x, , y] = [1, 2, 3, 4]; // x == 2; y == 4

// let [x, ...y] = [1, 2, 3, 4];  // y == [2,3,4]

let [a, [b, c]] = [1, [2, 2.5], 3]; // a == 1; b == 2; c == 2.5
