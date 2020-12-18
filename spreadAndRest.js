
// Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
    name: 'Tony'
};

const newPerson = {
    ...person,
    age: 32
};
console.log(newPerson);

// Rest
const filter = (...args) => args.filter(el => el === 1);

console.log(filter(1, 2, 3));