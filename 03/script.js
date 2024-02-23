//Data Types


// Numbers

let num = 3.14;

let num2 = 10;

console.log(num + num2);

// Strings


const firstName = "Shubham";

const lastName = 'Chinchole';

console.log(firstName + ' ' + lastName);


// string '1' + '1' - string
// string + number = string
// string * number = number
console.log('1' + '1');  // o/p -> 11
console.log('1' + 1);    // o/p -> 11
console.log('123' * 1);  // o/p -> 123 



// Booleans  1 | 0


let isLoggedIn = false


// JS 1 -> true   | 0 -> false

// true  -> 1
// false -> 0

console.log(isLoggedIn +10);  // o/p -> 10

// but for true  o/p -> 11

   

// Null

let lastLoginDate = null;

console.log(isLoggedIn);

console.log(lastLoginDate);


// Objects

const person = {

    firstName: 'Shubham',
    lastName: 'Chinchole',
    age: 28,
    isLoggedIn:false,
    lastLoginDate: null,
}


console.log(person)



// Typeof operator

console.log(typeof('123' * 1)); 
console.log(typeof('123')); 
console.log(typeof(lastLoginDate));
console.log(typeof(isLoggedIn));
console.log(typeof(person))
console.log(typeof(person.firstName))






