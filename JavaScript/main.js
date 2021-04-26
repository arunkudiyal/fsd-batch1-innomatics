// BASICS

// Print the output //

// alert('Hello World!')   // It halts the documnt rendering
// console.warn('Hello, warning occured!');
// console.error('Hello, error occured!');

// console.log('Hello World!');

// VARIABLES
// var, let, const

// We don;t use it anymore
// Declare something as global | Global Level Scope
// var name = 'Arun';
// console.log(name);

// // Declares something as local | Local Level Scope | ES6
// let a;
// a = 17.89;
// console.log(a);

// // Declares something as local but the value cannot be changed | Local Level Scope
// // Initialization and defination should be done in one line
// const b = false;
// // b = true; | NOT ACCETABLE
// console.log(b);

// Basic JavaScript Primitive DataTypes //
// String, Number, Boolean, Null, Undefined

// const name = 'Harry Potter';
// console.log(typeof name);

// const age = 30;
// console.log(typeof age);

// const percent = 19.38;
// console.log(typeof percent);

// const isCool = false;
// console.log(typeof isCool);

// // IMP.
// const x = null;
// console.log(typeof x); // Object

// const y = undefined;
// console.log(typeof y);

// let b;
// console.log(b); // undefined and it is not null


// STRINGS & STRING METHODS //

// Contatenation
// const fName = 'Harry';
// const lName = 'Potter';
// console.log("Hey, I am " + fName + " " + lName);

// // String Literals | Template Literals (Better) - ${ variable }
// console.log(`Hey, My name is ${fName} ${lName}`);

// Methods + Properties
// const s = 'Hello World';
// const len = s.length;
// console.log(len);

// // Change the case
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// // get the substring | A specified part of a string | Returns a string
// console.log( s.substring(0, 7) ); // (start, end) -> [start], (end) | start to (end - 1)

// // Split | Converts a string to an array
// console.log(s.split(''));

// const keywords = 'technology, space, cars, music, JavaScript, food';
// console.log( keywords.split(', ') );

// // indexOf - returns with the index of a specificed letter in string
// console.log(s.indexOf('W'));



// ARRAYS - A collection of DataTypes | Strore multiple variables //
// [ ] -> Arrays | Arrays are 0 index based

// Way 1 -> using Array() constructor
// const animals = new Array('Lion', 'Tiger', 'Zebra', 'Monkey', 'Whale');
// console.log(animals);

// // Way 2 -> Modern Way | [ ]
// const fruits = ['Mango', 'Banana', 'Orange', 'Grapes', 'Pears'];
// console.log(fruits);

// // An array in JS can contain any datatype
// const arr = [19, 'String One', 21.33, true, null, undefined, [10, 20, 30]];
// console.log(arr);

// // Modification of Array

// // Add / Replace by giving the index
// fruits[5] = 'Blueberries'
// console.log(fruits);
// // fruits[10] = 10;

// // No idea about the index -> push()
// fruits.push('Watermelon')

// // Add an element to the starting index of the array
// //  fruits[0] = 'Something' -> REPLACE

// fruits.unshift('Something')

// // Remove the data
// fruits.pop();

// const b = true;

// // Check if a variable is an array or not
// console.log( Array.isArray(fruits) ); // true
// console.log( Array.isArray(animals) ); // true
// console.log( Array.isArray(b) ); // false

// // indexOf -> give you the index of a specified value if that exist in the array | Index - if available or -1 - not available
// console.log( fruits.indexOf('Papaya') );

// console.log(fruits);



// OBJECTS - {  } //
// Object is collection of key value pairs
// key: value

const person = {
    name: 'Harry Potter',
    age: 22,

    // An array inside an object
    hobbies: ['Magic', 'Studying', 'Getting in trouble'],

    // An another object inside an object
    address: {
        street: '50 Main Street',
        city: 'London',
        country: 'United Kingdom'
    }
}

// Access the values

// Print the full name & age
console.log( `I am ${person.name} and I am ${person.age}` );

// Print the hobbies of the person
console.log( `I am ${person.name} and my hobbies are ${person.hobbies[0]}, ${person.hobbies[1]} and ${person.hobbies[2]}` );

// Print the complete adress of the person
console.log( `I am ${person.name} and I live in ${person.address.street}, ${person.address.city}, ${person.address.country}` );

// Add a property in already existing object
person.email = 'harry.potter@hogwards.com';

person.hobbies.push('Reading books');

person.address.pin = 12345;

console.log(person);