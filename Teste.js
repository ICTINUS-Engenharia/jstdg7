const benjaminButton = {
    age: 25,
    family: { son: 'Benadict Button' },
    'favorite-songs': ['We are young', 'Young love', 'We aint never gettin older'],
    '5yearPlan': 'Get younger'
};

const age = benjaminButton.age;
const son = benjaminButton.family.son;
const graddaughter = benjaminButton?.family?.daughter?.graddaughter;
const faveSongs = benjaminButton['favorite-songs'];

const myKey = '5yearPlan';
const myValue = benjaminButton[myKey];  // Get Younger

const { [myKey]: myNewValue, family: oldFamily, age: oldAge } = benjaminButton; // Destruction

console.log(myNewValue);
console.log(oldFamily);
console.log(oldAge);

let i;
let sum;