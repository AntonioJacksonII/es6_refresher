// ES6 Syntax
// class Human {
//     constructor() {
//         this.gender = 'Male';
//     }
//     printGender() {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     constructor() {
//         super();
//         this.name = 'Tony';
//     }

//     printMyName() {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

//ES7 Syntax
class Human {
    gender = 'Male';
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Tony';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();