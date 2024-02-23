// Arrays High Order Functions

const students = ['Shubham', 'Johan' ,'Jane','Bill'];

function print(n){
    console.log(n)
}

// forEach loop
// here we are passing function as argument in forEach()
// it doesn't return any arrray
students.forEach(print)

console.log("_______________________________________________________________________")

// using arrow functions
students.forEach((val) => console.log(val +' Chinchole'))

/// map function
// it  return an  arrray

console.log("_______________________________________________________________________")

students.map((val) => console.log(val));



const numbers = [1, 2, 3, 4, 5, 6, 7];


function double (n){
    return n*2;
}

let newArr = numbers.map(double);
console.log(numbers)

console.log(newArr)


// find function

let ans = numbers.find(num => num ===4);
console.log(ans);


// findIndex() will return index of element




//include() it return boolean value
console.log(numbers.includes(3));


// filter function

const newArrary = numbers.filter((num) => num % 2 == 0)

console.log(newArrary);


//slice function
// it ignore the last index given
// it will return new array

const nums = [1, 2, 3, 4, 5, 6, 7];

let newA = nums.slice(1, 5);

console.log(newA);

let newB = nums.slice(0);

console.log(newB);

// splice() function
// it remove element  
// it modify orignal array 
// it return a new array

const number1 = [1, 2, 3, 4, 5, 6, 7];

let new1 = number1.splice(1, 4);

console.log(new1); // [2, 3, 4, 5]
console.log(number1); //[1, 6, 7]

