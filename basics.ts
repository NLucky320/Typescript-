//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Lucky';

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies= ['Sports', 'Cooking'];


// let person;
type Person = {
    name: string;
    age: number;

};

let person: Person;

person = {
    name: 'Lucky',
    age: 28
}

// person = {
//     isEmployee: true
// }

let people: Person[];


//Type interface

let course: string | number = 'React - The Complete Guide';

course = 12341;

let height = 5.5;

// height ='tall'


// Function & types

function addN(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value)
}
