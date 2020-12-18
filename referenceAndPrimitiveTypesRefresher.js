//Primitive Types

const number = 1;
const num2 = number;

console.log(num2);

//Reference Types

const person = {
    name: 'Tony'
};

const secondPerson = person;
console.log(secondPerson);
person.name = 'Antonio';
console.log(secondPerson);

const thirdPerson = {
    ...person
};
console.log(thirdPerson);
person.name = 'Tony';
console.log(secondPerson);
console.log(thirdPerson);